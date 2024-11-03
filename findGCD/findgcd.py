
def findgcd(a:int, b:int)-> int:
    while(b!=0):
        remainder=a%b
        a=b
        b=remainder
    return a 

def main()->None:
   result= findgcd(48,18)
   print(f"GCD is {result}")

if __name__=="__main__":
    main()



