import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.module.js";
import { gsap } from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/index.js";

let introFinished = false;

const container = document.querySelector("#orbit-container");
const numberEl = document.querySelector(".orbit-number");
const titleEl = document.querySelector(".orbit-title");
const isMobile = window.innerWidth < 768;

if (isMobile) {
    document.body.classList.add("is-mobile-orbit");

    if (numberEl) numberEl.style.display = "none";
    if (titleEl) titleEl.style.display = "none";

    const orbitInfo = document.querySelector(".orbit-info");
    if (orbitInfo) orbitInfo.style.display = "none";
}

const projects = [
    {
        number: "03.",
        title: "building bridges",
        image: "images/buildingBridges/1_visualisations/the-cabine.jpg",
        link: "projekte/buildingBridges.html"
    },
    {
        number: "06.",
        title: "duplex",
        image: "images/ArtistsDuplex/modelPhotos/Axo_View.jpg",
        link: "projekte/ArtistsDuplex.html"
    },
    {
        number: "07.",
        title: "library (extension)",
        image: "images/Library/1_visualisations/Physical-Render.jpg",
        link: "projekte/Library.html"
    },
    {
        number: "01.",
        title: "school in frankfurt",
        image: "images/site-plan_square.jpg",
        link: "projekte/school.html"
    },
    {
        number: "04.",
        title: "monastery calmont",
        image: "images/calmont/1_visualisations/calmont-exterior.jpg",
        link: "projekte/calmont.html"
    },
    {
        number: "02.",
        title: "coral scraper",
        image: "images/coralScraper/1_visualisations/coral-scraper.jpg",
        link: "projekte/coralScraper.html"
    },
    {
        number: "08.",
        title: "studio",
        image: "images/Studio/modelPhotos/MP_1.jpg",
        link: "projekte/Studio.html"
    },
    {
        number: "05.",
        title: "ugly chair",
        image: "images/uglyChair/1_visualisations/uglyChair.jpg",
        link: "projekte/uglyChair.html"
    },
    
    {
        number: "09.",
        title: "duplex",
        image: "images/ArtistsDuplex/1_visualisations/Visual-Street.jpg",
        link: "projekte/ArtistsDuplex.html"
    },
    {
        number: "10.",
        title: "duplex",
        image: "images/ArtistsDuplex/1_visualisations/Visual-Studio.jpg",
        link: "projekte/ArtistsDuplex.html"
    },
    {
        number: "11.",
        title: "duplex",
        image: "images/ArtistsDuplex/1_visualisations/Axo-Close.jpg",
        link: "projekte/ArtistsDuplex.html"
    },
    {
        number: "12.",
        title: "duplex",
        image: "images/ArtistsDuplex/1_visualisations/Axo-Far.jpg",
        link: "projekte/ArtistsDuplex.html"
    },
    {
        number: "13.",
        title: "duplex",
        image: "images/ArtistsDuplex/pictograms/circle_video.mp4",
        link: "projekte/ArtistsDuplex.html"
    },
    {
        number: "14.",
        title: "duplex",
        image: "images/ArtistsDuplex/plans/plans_video.mp4",
        link: "projekte/ArtistsDuplex.html"
    },
    {
        number: "15.",
        title: "duplex",
        image: "images/ArtistsDuplex/modelPhotos/Front_View.jpg",
        link: "projekte/ArtistsDuplex.html"
    },
    {
        number: "16.",
        title: "building bridges",
        image: "images/buildingBridges/1_visualisations/bridge-combined.jpg",
        link: "projekte/buildingBridges.html"
    },
    {
        number: "17.",
        title: "building bridges",
        image: "images/buildingBridges/1_visualisations/microhome-interior.jpg",
        link: "projekte/buildingBridges.html"
    },
    {
        number: "18.",
        title: "building bridges",
        image: "images/buildingBridges/modelPhotos/model-photo.jpg",
        link: "projekte/buildingBridges.html"
    },
    {
        number: "19.",
        title: "building bridges",
        image: "images/buildingBridges/plans/modular-system.jpg",
        link: "projekte/buildingBridges.html"
    },
    {
        number: "20.",
        title: "building bridges",
        image: "images/buildingBridges/pictograms/refugee-routes.jpg",
        link: "projekte/buildingBridges.html"
    },
    {
        number: "21.",
        title: "building bridges",
        image: "images/buildingBridges/pictograms/exploded-diagram.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "22.",
        title: "monastery calmont",
        image: "images/calmont/1_visualisations/Render-Foyer.jpg",
        link: "projekte/calmont.html"
    },
    {
        number: "23.",
        title: "monastery calmont",
        image: "images/calmont/1_visualisations/Render-Hof.jpg",
        link: "projekte/calmont.html"
    },
    {
        number: "24.",
        title: "monastery calmont",
        image: "images/calmont/modelPhotos/model-500.jpg",
        link: "projekte/calmont.html"
    },
    {
        number: "25.",
        title: "monastery calmont",
        image: "images/calmont/modelPhotos/500-close.jpg",
        link: "projekte/calmont.html"
    },
    {
        number: "26.",
        title: "coral scraper",
        image: "images/coralScraper/sections/section.jpg",
        link: "projekte/coralScraper.html"
    },
    {
        number: "27.",
        title: "monastery calmont",
        image: "images/calmont/plans/Lageplan-500.jpg",
        link: "projekte/calmont.html"
    },
    {
        number: "28.",
        title: "monastery calmont",
        image: "images/calmont/plans/Schwarzplan-5000.jpg",
        link: "projekte/calmont.html"
    },
    {
        number: "29.",
        title: "library (extension)",
        image: "images/Library/1_visualisations/Interior_Perspective.jpg",
        link: "projekte/Library.html"
    },
    {
        number: "30.",
        title: "library (extension)",
        image: "images/Library/modelPhotos/Photo_01.jpg",
        link: "projekte/Library.html"
    },
    {
        number: "31.",
        title: "library (extension)",
        image: "images/Library/modelPhotos/Photo_02.jpg",
        link: "projekte/Library.html"
    },
    {
        number: "32.",
        title: "library (extension)",
        image: "images/Library/modelPhotos/Photo_03.jpg",
        link: "projekte/Library.html"
    },
    {
        number: "33.",
        title: "library (extension)",
        image: "images/Library/pictograms/Extension_02_video.mp4",
        link: "projekte/Library.html"
    },
    {
        number: "34.",
        title: "library (extension)",
        image: "images/Library/pictograms/List.jpg",
        link: "projekte/Library.html"
    },
    {
        number: "35.",
        title: "news",
        image: "images/mt_News/Competition-Panel.jpg",
        link: "news.html"
    },
    {
        number: "36.",
        title: "school in frankfurt",
        image: "images/school/1_visualisations/interior-cluster.jpg",
        link: "projekte/school.html"
    },
    {
        number: "37.",
        title: "school in frankfurt",
        image: "images/school/1_visualisations/interior-ground-floor.jpg",
        link: "projekte/school.html"
    },
    {
        number: "38.",
        title: "school in frankfurt",
        image: "images/school/1_visualisations/school-exterior.jpg",
        link: "projekte/school.html"
    },
    {
        number: "39.",
        title: "school in frankfurt",
        image: "images/school/pictograms/explosion.jpg",
        link: "projekte/school.html"
    },
    {
        number: "40.",
        title: "school in frankfurt",
        image: "images/school/plans/context.jpg",
        link: "projekte/school.html"
    },
    {
        number: "41.",
        title: "studio",
        image: "images/Studio/1_visualisations/Exterior-Perspective",
        link: "projekte/Studio.html"
    },
    {
        number: "42.",
        title: "studio",
        image: "images/Studio/modelPhotos/MP_2.jpg",
        link: "projekte/Studio.html"
    },
    {
        number: "43.",
        title: "studio",
        image: "images/Studio/modelPhotos/MP_3.jpg",
        link: "projekte/Studio.html"
    },
    {
        number: "44.",
        title: "studio",
        image: "images/Studio/modelPhotos/MP_4.jpg",
        link: "projekte/Studio.html"
    },
    {
        number: "45.",
        title: "studio",
        image: "images/Studio/pictograms/explosion.jpg",
        link: "projekte/Studio.html"
    },
    {
        number: "46.",
        title: "studio",
        image: "images/Studio/plans/Configurations_video.mp4",
        link: "projekte/Studio.html"
    },
    {
        number: "47.",
        title: "coral scraper",
        image: "images/coralScraper/pictograms/modules_video.mp4",
        link: "projekte/coralScraper.html"
    },
    {
        number: "48.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "49.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "50.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "51.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "52.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "53.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "54.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "55.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "56.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "57.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "58.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "59.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "60.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "61.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "62.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "63.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "64.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "65.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "66.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "67.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "68.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "69.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "70.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "71.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "72.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "73.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "74.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "75.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "76.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "77.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "78.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "79.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "80.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "81.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "82.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "83.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "84.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "85.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "86.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "87.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "88.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "89.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "90.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "91.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "92.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "93.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "94.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "95.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "96.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "97.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "98.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "99.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "100.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "101.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "102.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "103.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "104.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "105.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "106.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "107.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "108.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "109.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "110.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "111.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "112.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "113.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "114.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "115.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
    {
        number: "116.",
        title: "Neues Projekt",
        image: "images/test.jpg",
        link: "projekte/neuesProjekt.html"
    },
];

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    80,
    window.innerWidth / window.innerHeight,
    0.1,
    100
);

const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2)
);

container.appendChild(renderer.domElement);

const world = new THREE.Group();
scene.add(world);

world.rotation.y = -0.55;

gsap.fromTo(
    world.rotation,
    { y: -1.2 },
    {
        y: Math.PI * 1,
        duration: 3,
        ease: "expo.out"
    }
);

camera.position.set(0, 0, 14);

gsap.to(camera.position, {
    z: 0,
    duration: 3,
    ease: "power3.inOut"
});

gsap.delayedCall(3, () => {
    introFinished = true;
});

const loader = new THREE.TextureLoader();
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

const cards = [];
let hoveredCard = null;

const sphereRadius = isMobile ? 5.6 : 6;

const rings = [
    { y: 5.4, count: 6 },
    { y: 4.4, count: 8 },
    { y: 3.4, count: 10 },
    { y: 2.4, count: 12 },
    { y: 1.4, count: 14 },
    { y: 0.0, count: 16 },   // einzige Mitte
    { y: -1.4, count: 14 },
    { y: -2.4, count: 12 },
    { y: -3.4, count: 10 },
    { y: -4.4, count: 8 },
    { y: -5.4, count: 6 }
];


function getRingPosition(index) {
    let startIndex = 0;

    for (const ring of rings) {
        if (index < startIndex + ring.count) {
            const localIndex = index - startIndex;
            const angle = (localIndex / ring.count) * Math.PI * 2;
            const ringRadius = Math.sqrt(
                sphereRadius * sphereRadius - ring.y * ring.y
            );

            return {
                x: Math.sin(angle) * ringRadius,
                y: ring.y,
                z: Math.cos(angle) * ringRadius
            };
        }

        startIndex += ring.count;
    }

    return null;
}

projects.forEach((project, index) => {
    const position = getRingPosition(index);

    if (!position) return;

    const isVideo =
        project.image.endsWith(".mp4") ||
        project.image.endsWith(".webm");

    if (isVideo) {
        const video = document.createElement("video");

        video.src = project.image;
        video.loop = true;
        video.muted = true;
        video.playsInline = true;
        video.autoplay = true;
        video.crossOrigin = "anonymous";

        video.addEventListener("loadedmetadata", () => {
            video.play();

            const texture = new THREE.VideoTexture(video);
            texture.colorSpace = THREE.SRGBColorSpace;

            const aspect = video.videoWidth / video.videoHeight;

            createCard(project, position, texture, aspect);
        });
    } else {
        loader.load(project.image, (texture) => {
            texture.colorSpace = THREE.SRGBColorSpace;

            const aspect = texture.image.width / texture.image.height;

            createCard(project, position, texture, aspect);
        });
    }
});

function createCard(project, position, texture, aspect) {
    const baseHeight = isMobile ? 0.6 : 0.75;
    const width = baseHeight * aspect;

    const geometry = new THREE.PlaneGeometry(width, baseHeight);

    const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        side: THREE.DoubleSide
    });

    const card = new THREE.Mesh(geometry, material);

    const targetPosition = {
        x: position.x,
        y: position.y,
        z: position.z
    };

    card.userData = {
        project: project,
        position: position,
        baseZ: (1 - Math.abs(position.y / sphereRadius)) * Math.PI * 0.5
    };

    world.add(card);
    cards.push(card);

    card.position.copy(targetPosition);
    card.scale.set(1, 1, 1);
    card.material.opacity = 1;
}

function updateInfo(project) {
    numberEl.textContent = project.number;
    titleEl.textContent = project.title;
}

updateInfo(projects[0]);

let yaw = 0;
let pitch = 0;

let targetYaw = 0;
let targetPitch = 0;

window.addEventListener("mousemove", (event) => {
    if (!introFinished) return;

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;

    targetYaw = -x * Math.PI * 2;
    targetPitch = -y * Math.PI * 0.7;

    targetPitch = Math.max(
        -Math.PI / 3,
        Math.min(Math.PI / 3, targetPitch)
    );
});

let lastTouchX = 0;
let lastTouchY = 0;
let startTouchX = 0;
let startTouchY = 0;
let isTouching = false;

window.addEventListener("touchstart", (event) => {
    if (!introFinished) return;

    const touch = event.touches[0];

    lastTouchX = touch.clientX;
    lastTouchY = touch.clientY;
    startTouchX = touch.clientX;
    startTouchY = touch.clientY;
    isTouching = true;

    mouse.x = (touch.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(touch.clientY / window.innerHeight) * 2 + 1;
}, { passive: true });

window.addEventListener("touchmove", (event) => {
    event.preventDefault();

    if (!introFinished || !isTouching) return;

    const touch = event.touches[0];

    const deltaX = touch.clientX - lastTouchX;
    const deltaY = touch.clientY - lastTouchY;

    targetYaw += deltaX * 0.0035;
    targetPitch += deltaY * 0.0022;

    targetPitch = Math.max(
        -Math.PI / 3,
        Math.min(Math.PI / 3, targetPitch)
    );

    lastTouchX = touch.clientX;
    lastTouchY = touch.clientY;

    mouse.x = (touch.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(touch.clientY / window.innerHeight) * 2 + 1;
}, { passive: false });

window.addEventListener("touchend", (event) => {
    isTouching = false;

    if (!isMobile || !introFinished) return;

    const touch = event.changedTouches[0];

    const moveX = Math.abs(touch.clientX - startTouchX);
    const moveY = Math.abs(touch.clientY - startTouchY);

    const tapThreshold = 10;

    const isTap =
        moveX < tapThreshold &&
        moveY < tapThreshold;

    if (!isTap) return;

    openCardAtPointer(
        touch.clientX,
        touch.clientY
    );
});

function openCardAtPointer(x, y) {
    if (!introFinished) return;

    mouse.x = (x / window.innerWidth) * 2 - 1;
    mouse.y = -(y / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(cards);

    if (intersects.length > 0) {
        const card = intersects[0].object;
        const link = card.userData.project.link;

        if (link && link !== "#") {
            window.location.href = link;
        }
    }
}

window.addEventListener("click", (event) => {
    if (isMobile) return;

    if (hoveredCard && introFinished) {
        window.location.href = hoveredCard.userData.project.link;
    }
});

function updateCamera() {
    yaw += (targetYaw - yaw) * 0.06;
    pitch += (targetPitch - pitch) * 0.06;

    camera.rotation.order = "YXZ";
    camera.rotation.y = yaw;
    camera.rotation.x = pitch;
}

function checkHover() {
    if (!introFinished || isMobile) return;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(cards);

    if (intersects.length > 0) {
        const card = intersects[0].object;

        if (hoveredCard !== card) {
            if (hoveredCard) {
                gsap.to(hoveredCard.scale, {
                    x: 1,
                    y: 1,
                    z: 1,
                    duration: 0.25
                });
            }

            hoveredCard = card;
            updateInfo(card.userData.project);

            gsap.to(card.scale, {
                x: 1.25,
                y: 1.25,
                z: 1.25,
                duration: 0.25,
                ease: "power3.out"
            });

            document.body.style.cursor = "pointer";
        }
    } else {
        if (hoveredCard) {
            gsap.to(hoveredCard.scale, {
                x: 1,
                y: 1,
                z: 1,
                duration: 0.25
            });
        }

        hoveredCard = null;
        document.body.style.cursor = "default";
    }
}

const worldUp = new THREE.Vector3(0, 1, 0);
const normal = new THREE.Vector3();
const right = new THREE.Vector3();
const up = new THREE.Vector3();
const rotationMatrix = new THREE.Matrix4();

function updateCardOrientation() {
    cards.forEach((card) => {
        const pos = card.userData.position;

        // Richtung von Karte zur Kugelmitte
        normal.set(
            -pos.x,
            -pos.y,
            -pos.z
        ).normalize();

        // lokale Rechts-Achse der Karte
        right.crossVectors(worldUp, normal);

        if (right.lengthSq() < 0.0001) {
            right.set(1, 0, 0);
        } else {
            right.normalize();
        }

        // lokale Hoch-Achse der Karte
        up.crossVectors(normal, right).normalize();

        // Karte tangential auf die Kugel setzen
        rotationMatrix.makeBasis(
            right,
            up,
            normal
        );

        card.quaternion.setFromRotationMatrix(rotationMatrix);
    });
}

function animate() {
    requestAnimationFrame(animate);

    updateCamera();
    updateCardOrientation();
    checkHover();

    renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2)
);
});