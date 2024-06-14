url=`https://reqres.in/api/users?page=2`
fetch(url)
.then(res=>res.json())
.then(result=>{
    output=''
    for(let i=0;i<result['data'].length;i++)
        {
            user=result['data'][i]
            output+=`<tr>
            <tr>${user.id}</tr>
            <tr>${user.email}</tr>
            <tr>${user.first_name}</tr>
            <tr>${user.last_name}</tr>
            <tr><img src="${user.avatar}" alt=""></tr>
            </tr>`
        }
    console.table(result['data'])
    document.getElementById('records').innerHTML=output
})