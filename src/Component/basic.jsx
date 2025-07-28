/*useEffect =   useEffect React ka ek Hook hai jo function components me side effects handle karne ke liye use hota hai.

Side Effects ka matlab?
     Side effects matlab aise kaam jo component ke render hone ke baad hone chahiye:
     API call karna
     DOM ko manually change karna
     Event listener lagana
     Timer set karna
     LocalStorage me kuch save karna Etc.

Syntax=
     useEffect(() => {      //  Ye ek function deta hai jisme hum woh kaam likhte hain jo render ke baad hone chahiye.
     // yahan side effect likhte hain
     }, [dependencies]);    //Ye ek array hoti hai jisme hum batate hain ki kin cheezon ke change hone par ye effect dobara chale.
                              //Agar ye array empty hai [], to effect sirf ek baar chalega (componentDidMount ki tarah

*/ 