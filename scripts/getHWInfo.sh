# tegrastats --interval 0 | head -n 1 | awk '{print $10; print $14; print $2; print $6; for ( i = 15; i <= NF; i++ ) print $i; }'
# df --total | awk '/total/ {print $3, $4, $5}' | sed 's/%//'
echo "[0%@1036,0%@1036,0%@1036,0%@1036]
0%
1792/3964MB
0/1982MB
PLL@36C
CPU@37.5C
PMIC@50C
GPU@35.5C
AO@42C
thermal@37.75C
13204970 113408472 11"