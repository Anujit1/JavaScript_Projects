const userinput = document.querySelector('#userinput');

const keyData = document.querySelector('.keyData');

// key detector
window.addEventListener('keydown', (e) => {
    userinput.innerHTML = `${e.key === ' ' ? 'Space' : e.key}`;

    keyData.innerHTML = `
        <table border="">
            <tr>
                <th>Key</th>
                <th>KeyCode</th>
                <th>Code</th>
            </tr>
            <tr>
                <td>${e.key === ' ' ? 'Space' : e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
    `;

});


// screen cleaner
let clear = function (){
    userinput.innerHTML = '';
    keyData.innerHTML = '';
};

setInterval(clear, 5000)