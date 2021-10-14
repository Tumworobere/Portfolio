const projectList = {
  firstProject: {
    popupHeading: 'Multi-Post Stories 1',
    languages: ['html', 'Bootstrap', 'Ruby on Rails'],
    images: 'images/mb-modal.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    liveServerbtn: 'https://tumworobere.github.io/Portfolio/',
    sourceCode: 'https://github.com/Tumworobere/Portfolio',

  },
  secondProject: {
    popupHeading: 'Multi-Post Stories 2',
    languages: ['html', 'Bootstrap', 'Ruby on Rails'],
    images: 'images/mb-modal.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    liveServerbtn: 'https://tumworobere.github.io/Portfolio/',
    sourceCode: 'https://github.com/Tumworobere/Portfolio',
  },
  thirdProject: {
    popupHeading: 'Multi-Post Stories 3',
    languages: ['html', 'Bootstrap', 'Ruby on Rails'],
    images: 'images/mb-modal.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    liveServerbtn: 'https://tumworobere.github.io/Portfolio/',
    sourceCode: 'https://github.com/Tumworobere/Portfolio',
  },

  fourthProject: {
    popupHeading: 'Multi-Post Stories 4',
    languages: ['html', 'Bootstrap', 'Ruby on Rails'],
    images: 'images/mb-modal.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    liveServerbtn: 'https://tumworobere.github.io/Portfolio/',
    sourceCode: 'https://github.com/Tumworobere/Portfolio',
  },

  fifthProject: {
    popupHeading: 'Multi-Post Stories 5',
    languages: ['html', 'Bootstrap', 'Ruby on Rails'],
    images: 'images/mb-modal.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    liveServerbtn: 'https://tumworobere.github.io/Portfolio/',
    sourceCode: 'https://github.com/Tumworobere/Portfolio',
  },

  sixthProject: {
    popupHeading: 'Multi-Post Stories 6',
    languages: ['html', 'Bootstrap', 'Ruby on Rails'],
    images: 'images/mb-modal.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    liveServerbtn: 'https://tumworobere.github.io/Portfolio/',
    sourceCode: 'https://github.com/Tumworobere/Portfolio',
  },
};

const projects = [
  projectList.firstProject,
  projectList.secondProject,
  projectList.thirdProject,
  projectList.fourthProject,
  projectList.fifthProject,
  projectList.sixthProject,
];


function modal(number) {
  const modalSection = document.querySelector('#modal');
  modalSection.style.display = 'flex';
  document.querySelector('#portfolio').classList.add('activeblur');
  document.querySelector('.about').classList.add('activeblur');
  document.querySelector('*').style.overflow = 'hidden';
  const modalHeading = document.querySelector('.modal-title');
  const modalList = document.querySelector('.modal-list');
  modalList.innerHTML = '';
  const modalDesc = document.querySelector('.modal-description');

  modalHeading.innerText = projects[number].popupHeading;

  for (let i = 0; i < projects[number].languages.length; i += 1) {
    const list = document.createElement('li');
    list.textContent = projects[number].languages[i];
    modalList.appendChild(list);
  }

  modalDesc.innerHTML = projects[number].description;
  document.querySelectorAll('.modal-btn > a')[0].href = projects[number].liveServerbtn;
  document.querySelectorAll('.modal-btn > a')[1].href = projects[number].sourceCode;
}


function closeModal() {
  document.querySelector('#modal').style.display = 'none';
  document.querySelector('*').style.overflow = 'auto';
  document.querySelector('#portfolio').classList.remove('activeblur');
  document.querySelector('.about').classList.remove('activeblur');
}


