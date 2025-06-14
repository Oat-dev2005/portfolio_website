const navlinks = document.querySelector('.nav-links');
  const highlight = document.querySelector('.highlight');
  const items = document.querySelectorAll('.nav-links li');

  // ตั้งค่าความกว้างและตำแหน่งเริ่มต้น
  const activeItem = document.querySelector('.nav-links li.active a');
  if (activeItem) {
    highlight.style.width = activeItem.offsetWidth + 'px';
    highlight.style.left = activeItem.offsetLeft + 'px';
  }

  items.forEach((item) => {
    const link = item.querySelector('a');
    if (!link) return;

    item.addEventListener('click', () => {
      items.forEach(el => el.classList.remove('active'));
      item.classList.add('active');

      highlight.style.width = link.offsetWidth + 'px';
      highlight.style.left = link.offsetLeft + 'px';
    });

    item.addEventListener('mouseenter', () => {
      if (!item.classList.contains('active')) {
        highlight.style.width = link.offsetWidth * 0.8 + 'px';
        highlight.style.left = link.offsetLeft + (link.offsetWidth * 0.1) + 'px';
      }
    });

    item.addEventListener('mouseleave', () => {
      const activeItem = document.querySelector('.nav-links li.active a');
      if (activeItem) {
        highlight.style.width = activeItem.offsetWidth + 'px';
        highlight.style.left = activeItem.offsetLeft + 'px';
      }
    });
  });

  window.addEventListener('resize', () => {
    const activeItem = document.querySelector('.nav-links li.active a');
    if (activeItem) {
      highlight.style.width = activeItem.offsetWidth + 'px';
      highlight.style.left = activeItem.offsetLeft + 'px';
    }
  });


  const toggleNav = document.querySelector('.toggle-nav');
  
    toggleNav.addEventListener('click', () => {
    navlinks.classList.toggle('active');
  });

    // Cursor
     const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
        document.addEventListener('mousemove', (e) => {
            cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            cursorOutline.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });

        // Typing animation
        const typingEl = document.querySelector('.typing');
        const normalText = 'Hi, Welcome to ';
        const highlightText = 'My Portfolio';
        let normalIndex = 0;
        let highlightIndex = 0;

        typingEl.innerHTML = '';

        function typeText() {
            if (normalIndex < normalText.length) {
                typingEl.innerHTML += normalText.charAt(normalIndex);
                normalIndex++;
                setTimeout(typeText, 80);
            } else if (highlightIndex < highlightText.length) {
                if (highlightIndex === 0) {
                    typingEl.innerHTML += '<span class="highlight_title">';
                }

                typingEl.innerHTML = typingEl.innerHTML.slice(0, -7) + // remove </span>
                    highlightText.charAt(highlightIndex) + '</span>';

                highlightIndex++;
                setTimeout(typeText, 80);
            }
        }

        window.addEventListener('load', () => {
            setTimeout(typeText, 800);
        });

                
        // Scroll animation for sections
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

    document.querySelectorAll('.fade-section').forEach(section => {
        observer.observe(section);
    });

    particlesJS("particles-js", {
        "particles": {
            "number": {"value": 60,"density": {"enable": true,"value_area": 800}},
            "color": {"value": "#0D0D0D"},
            "shape": {"type": "circle"},
            "opacity": {"value": 0.5},
             "size": {"value": 3},
            "line_linked": {"enable": true,"distance": 150,"color": "#353535","opacity": 0.4,"width": 1},
            "move": {"enable": true,"speed": 2}
        },
        "interactivity": {
            "detect_on": "canvas", // หรือ 'window' ก็ได้
            "events": {"onhover": {"enable": true,"mode": "repulse"},
                        "onclick": {"enable": true,"mode": "push" },// อันนี้จะเพิ่มอนุภาคเมื่อคลิก
            "resize": true},
            "modes": {"repulse": {"distance": 100,"duration": 0.4},
                        "push": {"particles_nb": 4}}
        },
        "retina_detect": true
    });
    
    const toggleBtn = document.querySelector('.toggle-mode');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                document.body.classList.toggle('dark-mode');
                toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '🌙' : '☀️';

                const profileImg = document.getElementById('profile_img');
                if (profileImg) {
                    profileImg.src = document.body.classList.contains('dark-mode') ? 'images/bg_dark.jpg' : 'images/myself.jpg';
                }
            });
        }

    document.querySelectorAll('.floating-icon').forEach(icon => {
        const delay = Math.random() * 10;  // ระหว่าง 0-10 วินาที
        const duration = 10 + Math.random() * 12; // ระหว่าง 10-20 วินาที
        icon.style.animationDelay = `${delay}s`;
        icon.style.animationDuration = `${duration}s`;
    });

    const messages = [
        "wake up",
        "accessing memory...",
        "system breach",
        "follow the signal",
        "decoding...",
        "incoming transmission",
        "0x7F corrupt",
        "███ signal lost",
        "decryption failed",
        "dev??",
        "mUsT sEcURitY"
    ];

    const projects = document.getElementById("projects");

    // ตรวจสอบว่าตำแหน่งใหม่ห่างพอจากตำแหน่งที่มีอยู่
        function isOverlapping(newPos, usedPositions, minDistance = 10) {
        return usedPositions.some(pos => {
            const dx = pos.x - newPos.x;
            const dy = pos.y - newPos.y;
            return Math.sqrt(dx * dx + dy * dy) < minDistance;
        });
    }

    function showRandomMessages() {
    const messageCount = Math.floor(Math.random() * 5) + 5; // 4–7 ข้อความ
    const usedPositions = [];

    let attempts = 0;
        while (usedPositions.length < messageCount && attempts < 50) {
            const x = Math.random() * 80 + 10;
            const y = Math.random() * 80 + 10;
            const newPos = { x, y };

            if (!isOverlapping(newPos, usedPositions)) {
            usedPositions.push(newPos);

            const msg = document.createElement("div");
            msg.className = "secretMessageInstance";
            msg.textContent = messages[Math.floor(Math.random() * messages.length)];
            msg.style.left = `${x}%`;
            msg.style.top = `${y}%`;
            msg.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 75 - 45}deg)`;

            projects.appendChild(msg);

            setTimeout(() => {
                msg.style.opacity = 0;
                setTimeout(() => msg.remove(), 1000);
            }, 800 + Math.random() * 800);
            }

            attempts++;
        }
    }

    projects.addEventListener("animationiteration", showRandomMessages);

        