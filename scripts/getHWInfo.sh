tegrastats | head -n 1 | awk '{print $10; print $14; print $2; print $6; for ( i = 15; i <= NF; i++ ) print $i; }'
df --total | awk '/total/ {print $3, $4, $5}' | sed 's/%//'
# echo "[10%@1036,20%@1036,30%@1036,85%@1036]
# 91%
#1792/3964MB
#0/1982MB
#PLL@36C
#CPU@37.5C
#PMIC@50C
#GPU@35.5C
#AO@42C
#thermal@37.75C
#13204970 113408472 11"