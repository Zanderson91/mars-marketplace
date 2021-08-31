const createPost = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();

    const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({
            //Add all form fields in modal for return
            fullName,
            email,
            listingTitle,
            listingCategory,
            listingDescription,
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit', createPost);
document.querySelector('#listingModal').addEventListener('submit', createPost);
