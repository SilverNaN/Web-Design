const postSection = document.querySelector('#posts');
const postTemp = document.querySelector('#post-template');

async function obtain_post() {
    try {

        const postStream = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();

        let index = 0;
        postStream.forEach((post) => {
            const postTemplate = document.importNode(postTemp.content.querySelector('.post'),true);
            const postImage = postTemplate.querySelector('.post-img');
            const postTitle = postTemplate.querySelector('.post-title');
            const postContent = postTemplate.querySelector('.post-content');

            if (index < 10) {
                fetch('https://picsum.photos/200/150')
                    .then(img => img.blob())
                    .then(image => {
                        const imgUrl = URL.createObjectURL(image);
                        postImage.setAttribute('src', imgUrl);
                        postTitle.innerText= post.title;
                        postContent.innerText= post.body;
                    })
                index++;
                postSection.appendChild(postTemplate)
            }
        })
        console.log(postStream)
    } catch (err) {
        console.log(err)
    }
}

obtain_post();