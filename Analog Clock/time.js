setInterval(function()  {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const time = `${hours}:$
    {minutes.toString().padStart(2, '0')}:$
    {seconds.toString().padStart(2, '0')}`;

    document.q
}, interval);
