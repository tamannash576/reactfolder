/*
//usecontext=  useContext React ka ek hook hai jo kisi React Context ki value ko directly access karne ke liye use hota hai.
hum isko ese b bol skte ki ye value ko store krta h uske baad hum isko kahi b access kr skte h 
 

syntax

step1:
     context create krna
     const MyContext = createContext(); 
     Yahaan humne MyContext naam ka ek context object banaya.
     Ab hum isko poore component tree me use kar sakte hain.
  

step2:
     Context provider lagana
     <MyContext.Provider value={"Hello World"}>
     <MyComponent />
     </MyContext.Provider>

     MyContext.Provider ek wrapper hota hai jo apne andar ke components ko data provide karta hai.
     value prop me hum wo data dete hain jo hum baaki components ko dena chahte hain.


Step 3: 
     useContext se value lena
     import { useContext } from "react";
     useContext import kar rahe hain.
     Iska use context ki value ko consume karne ke liye hota hai.
     
     const value = useContext(MyContext);   ye same file me hoge dono
     Yahaan hum MyContext ko useContext me pass kar rahe hain.
     Yeh line usi context ki value de deti hai jo nearest Provider se milti hai.




*/