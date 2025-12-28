const form = document.getElementById("form");
const bookForm = document.getElementById("book-form");
const welcome = document.getElementById("welcome");
const bookIdInput = document.getElementById("book-id");
const bookResult = document.getElementById("book-result");
const ptag = document.getElementById("ptag");

form.addEventListener("submit", login)

async function login(e){
    e.preventDefault();

    try{
        const body = {
             userName : e.target[0].value,
             password : e.target[1].value  
    
        }
        
        const fetchLogin = await fetch("https://instagram-express-app.vercel.app/login", 
            {
                method : "POST",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(body)
            }
        ) 
    
        const loginResponse = await fetchLogin.json();
    
        localStorage.setItem("token", loginResponse.token)
        localStorage.setItem("name", loginResponse.data.userName)
    
        form.classList.add("hide")
        bookForm.classList.remove("hide");

        welcome.innerText = `Welcome ${loginResponse.data.userName}`;


    
        console.log(loginResponse)
    }catch(err){
        console.log(err, "error");
        ptag.innerText = "❌ INVALID CREDENTIALS"
    }


    bookForm.addEventListener("submit", getBook);

async function getBook(e){
  e.preventDefault();

  const bookId = bookIdInput.value;

  try{

    const res = await fetch(
      `https://instagram-express-app.vercel.app/books/${bookId}`,
      {
        headers : {
          token : localStorage.getItem("token")
        }
      }
    );

    const data = await res.json();
    console.log(data);
     bookResult.innerText =
`BOOK DETAILS

ID : ${data.data.id}
Name : ${data.data.name}
Author : ${data.data.author}
Pages : ${data.data.pages}`;
    
  }catch(err){
    console.log(err);
    bookResult.innerText = "❌ Invalid Book ID or API Error";
  }
}


}