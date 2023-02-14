def solution(price, money, count):
    total_price = price
    for i in range(2, count+1):
        total_price += price * i
    
    return (total_price-money if money<total_price else 0)