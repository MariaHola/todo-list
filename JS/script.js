{
    const tasks = [
        {
            content: "nagrać podcast",
            done: true,
        },
        {
            content: "udostępnić nagranie",
            done: false,
        },

    ];

    const render = () => {
        let htmlString = "";
        
        for (const task of tasks) {
            htmlString +=`
            <li>
                ${task.content}
            </li>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    };
    
    const init = () => {
        render();
     };
    
    init();
}