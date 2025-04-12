const modalTag = document.querySelector('.big-picture');
const bigImageTag = modalTag.querySelector('.big-picture__img img');
const closeButtonTag=modalTag.querySelector('.big-picture__cancel');
const body = document.body;

const showModal = (isShow = true) => {
    if (isShow) {
        modalTag.classList.remove('hidden');
        body.classList.add('modal-open');
    } else {
        modalTag.classList.add('hidden');
        body.classList.remove('modal-open');
    }
};

const render = ({ url, description, comments, likes }) => {
    bigImageTag.src = url;
};

export const openModal = ({ url, description, comments, likes }) => {
    showModal();
    render({ url, description, comments, likes });
};

const closeModal=()=>{
    showModal(false);
};

closeButtonTag.addEventListener('click', ()=>{
    closeModal()
})
