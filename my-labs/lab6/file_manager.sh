#!/usr/bin/env bash

# Cách dùng: ./file_manager.sh <thư_mục> <dung_lượng_KB>

if [[ $# -lt 2 ]]
then
    echo "Lỗi: thiếu tham số."
    echo "Cách dùng: $0 <thư_mục> <dung_lượng_KB>"
    exit 1
fi

dir="$1"
threshold="$2"

if [[ ! -d "$dir" ]]
then
    echo "Lỗi: thư mục '$dir' không tồn tại."
    exit 2
fi

if [[ ! "$threshold" =~ ^[1-9][0-9]*$ ]]
then
    echo "Lỗi: ngưỡng dung lượng '$threshold' phải là số nguyên dương."
    exit 3
fi

# Đổi byte sang KB (2 chữ số thập phân)
to_kb() {
    awk -v b="$1" 'BEGIN { printf "%.2f", b / 1024 }'
}

show_menu() {
    echo
    echo "========== MENU =========="
    echo "1. Đếm số tệp"
    echo "2. Liệt kê tên và dung lượng các tệp"
    echo "3. Tìm tệp vượt quá ngưỡng dung lượng (${threshold} KB)"
    echo "4. Hiển thị thông tin tổng hợp"
    echo "0. Thoát"
    echo "=========================="
}

count_files() {
    local count=0 f
    for f in "$dir"/*
    do
        [[ -f "$f" ]] && count=$((count + 1))
    done
    echo "Số tệp trong '$dir': $count"
}

list_files() {
    local f size
    echo "Danh sách tệp trong '$dir':"
    for f in "$dir"/*
    do
        if [[ -f "$f" ]]
        then
            size=$(stat -c %s "$f")
            printf "  %-40s %10s KB\n" "$(basename "$f")" "$(to_kb "$size")"
        fi
    done
}

find_large_files() {
    local f size found=0
    echo "Tệp lớn hơn ${threshold} KB trong '$dir':"
    for f in "$dir"/*
    do
        if [[ -f "$f" ]]
        then
            size=$(stat -c %s "$f")
            if (( size > threshold * 1024 ))
            then
                printf "  %-40s %10s KB\n" "$(basename "$f")" "$(to_kb "$size")"
                found=$((found + 1))
            fi
        fi
    done
    (( found == 0 )) && echo "  (không có tệp nào)"
}

show_summary() {
    local f size count=0 total=0 large=0
    for f in "$dir"/*
    do
        if [[ -f "$f" ]]
        then
            size=$(stat -c %s "$f")
            count=$((count + 1))
            total=$((total + size))
            (( size > threshold * 1024 )) && large=$((large + 1))
        fi
    done
    echo "===== THÔNG TIN TỔNG HỢP ====="
    echo "Thư mục              : $dir"
    echo "Ngưỡng               : ${threshold} KB"
    echo "Tổng số tệp          : $count"
    echo "Tổng dung lượng      : $(to_kb "$total") KB"
    echo "Số tệp vượt ngưỡng   : $large"
}

while true
do
    show_menu
    read -r -p "Chọn (0-4): " choice || break
    case "$choice" in
        1) count_files ;;
        2) list_files ;;
        3) find_large_files ;;
        4) show_summary ;;
        0) echo "Tạm biệt."; exit 0 ;;
        *) echo "Lỗi: lựa chọn '$choice' không hợp lệ, hãy nhập 0-4." ;;
    esac
done
