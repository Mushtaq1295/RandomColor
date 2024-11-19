let a = document.getElementsByTagName('body');
const getColor = () =>{
    const randomNum = Math.floor(Math.random() * 16777215);
    console.log(randomNum)
    let z = '#'+randomNum.toString(16);
    document.body.style.backgroundColor = z;
    document.getElementById('colname').textContent = z;
}

document.getElementById('btn').addEventListener('click',getColor)


