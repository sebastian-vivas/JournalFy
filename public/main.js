const like = document.querySelectorAll(".like");
var trash = document.getElementsByClassName("fa-trash");

Array.from(like).forEach(function(element) {
      element.addEventListener('click', function(){
        const like = this.parentNode.childNodes[9].innerText
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'like': like
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const title = this.parentNode.parentNode.childNodes[3].innerText
        const date = this.parentNode.parentNode.childNodes[5].innerText
        const msg = this.parentNode.parentNode.childNodes[7].innerText
        const like = this.parentNode.parentNode.childNodes[9].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'title': title,
            'date': date,
            'msg': msg,
            'like': like
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
