def gcd(n, m):  # 최대공약수 구하기
    if m % n != 0:
        return gcd(m % n, n)
    return n


def lcm(n, m, division):  # 최소공배수 구하기 n * m / gcd
    return n * m // division


def solution(n, m):
    gcd_val = gcd(min(n, m), max(n, m))
    result = [gcd_val, lcm(n, m, gcd_val)]
    return result
