(function () {


    const buttons = document.querySelectorAll('.btn')
    const storeimage = document.querySelectorAll('.store-item')

    buttons.forEach((button) => {

        button.addEventListener('click', (e) => {

            e.preventDefalt()

            const filter = e.target.dataset.filter

            storeimage.forEach((item) => {
                if (filter === 'all') {
                    item.style.display = 'block'
                } else {
                    if (item.classlist.contains(filter)) {
                        item.style.display = 'block'
                    } else {
                        item.style.display = 'none'
                    }
                }
            })
        })
    })
})