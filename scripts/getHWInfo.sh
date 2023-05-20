tegrastats | head -n 1 | awk '{print $10; print $14; print $2; print $6; for ( i = 15; i <= NF; i++ ) print $i; }'
df --total | awk '/total/ {print $3, $4, $5}' | sed 's/%//'