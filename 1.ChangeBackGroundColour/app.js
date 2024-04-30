const body = document.getElementsByTagName('body')[0];
body.style.height = '100vh';
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.justifyContent = "center";
const colors = [
    {
        bodyColor: '#1A4D2E',
        textColor: '#E8DFCA',
    },
    {
        bodyColor: '#153448',
        textColor: '#DFD0B8',
    },
    {
        bodyColor: '#803D3B',
        textColor: '#B5C18E',
    },
    {
        bodyColor: '#8DECB4',
        textColor: '#FEFAF6'
    },
    {
        bodyColor:'#8B322C',
        textColor:'#C5FF95'
    }

]
const btn = document.getElementById('colorBtn');
const text = document.getElementsByTagName('h1');

let tempValue = 1;
btn.addEventListener('click', (e) => {
    e.preventDefault()
    let value = parseInt(Math.random() * 5)
    console.log(value)
    while (value === tempValue) {
        value = parseInt(Math.random() * 5)
    }
    body.style.backgroundColor = colors[value].bodyColor;
    body.style.color = colors[value].textColor;
    btn.style.borderColor = colors[value].textColor;
    btn.style.color = colors[value].textColor;
    tempValue = value;
})