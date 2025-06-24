let namaUser = '';
let nimUser = '';
let lastLoggedInUser = localStorage.getItem('lastLoggedInUser') || '';
let currentScheduleOwner = 'shared';
localStorage.setItem('currentScheduleOwner', 'shared');

// Default contents (store original HTML)
let defaultJadwalContent = `
    <h3>Senin:</h3>
    <ul>
      <li><strong>Shubuh:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Pagi:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Dhuhur:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Ashar:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Maghrib:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Isya:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Malam:</strong> Silakan edit kegiatan Anda.</li>
    </ul>
    <h3>Selasa:</h3>
    <ul>
      <li><strong>Shubuh:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Pagi:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Dhuhur:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Ashar:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Maghrib:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Isya:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Malam:</strong> Silakan edit kegiatan Anda.</li>
    </ul>
    <h3>Rabu:</h3>
    <ul>
      <li><strong>Shubuh:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Pagi:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Dhuhur:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Ashar:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Maghrib:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Isya:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Malam:</strong> Silakan edit kegiatan Anda.</li>
    </ul>
    <h3>Kamis:</h3>
    <ul>
      <li><strong>Shubuh:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Pagi:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Dhuhur:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Ashar:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Maghrib:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Isya:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Malam:</strong> Silakan edit kegiatan Anda.</li>
    </ul>
    <h3>Jumat:</h3>
    <ul>
      <li><strong>Shubuh:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Pagi:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Dhuhur:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Ashar:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Maghrib:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Isya:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Malam:</strong> Silakan edit kegiatan Anda.</li>
    </ul>
    <h3>Sabtu:</h3>
    <ul>
      <li><strong>Shubuh:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Pagi:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Dhuhur:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Ashar:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Maghrib:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Isya:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Malam:</strong> Silakan edit kegiatan Anda.</li>
    </ul>
    <h3>Minggu:</h3>
    <ul>
      <li><strong>Shubuh:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Pagi:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Siang:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Sore:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Maghrib:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Isya:</strong> Silakan edit kegiatan Anda.</li>
      <li><strong>Malam:</strong> Silakan edit kegiatan Anda.</li>
    </ul>
`;
let defaultKuliahContent = `
    <h3>Senin:</h3>
    <ul>
      <li>08.00-10.00: Mata Kuliah/Pelajaran Anda</li>
      <li>10.00-12.00: Mata Kuliah/Pelajaran Anda</li>
    </ul>
    <h3>Selasa:</h3>
    <ul>
      <li>09.00-11.00: Mata Kuliah/Pelajaran Anda</li>
      <li>13.00-15.00: Mata Kuliah/Pelajaran Anda</li>
    </ul>
    <h3>Rabu:</h3>
    <ul>
      <li>08.00-10.00: Mata Kuliah/Pelajaran Anda</li>
      <li>10.00-12.00: Mata Kuliah/Pelajaran Anda</li>
    </ul>
    <h3>Kamis:</h3>
    <ul>
      <li>09.00-11.00: Mata Kuliah/Pelajaran Anda</li>
      <li>13.00-15.00: Mata Kuliah/Pelajaran Anda</li>
    </ul>
    <h3>Jumat:</h3>
    <ul>
      <li>08.00-10.00: Mata Kuliah/Pelajaran Anda</li>
      <li>10.00-12.00: Mata Kuliah/Pelajaran Anda</li>
    </ul>
    <h3>Sabtu:</h3>
    <ul>
      <li>09.00-12.00: Kegiatan Ekstrakurikuler/Praktikum</li>
    </ul>
    <h3>Minggu:</h3>
    <ul>
      <li>Libur</li>
    </ul>
`;
let defaultCatatanContent = `
  <p>Tulis catatanmu di sini...</p>
  <p>Ini adalah tempat untuk menyimpan ide, daftar tugas, atau informasi penting lainnya.</p>
  <p>Coba edit teks ini untuk memulai!</p>
`;

let previousCatatanText = ''; 

let currentResetContentId = null; 
let currentEditTargetId = null; 
let selectedImageTheme = '';
const DEFAULT_BACKGROUND_IMAGE = 'https://files.catbox.moe/sxim3d.jpg'; 
let currentToastTimeout = null;
let activeEditableContentId = null; 
let currentDeleteItemElement = null; 
let historyState = []; // Custom history stack
let isNavigatingBack = false; // Flag to indicate back navigation

// Helper function to play sound
function playSound(soundId) {
  const sound = document.getElementById(soundId);
  if (sound) {
    sound.currentTime = 0;
    sound.play().catch(e => console.warn('Autoplay audio diblokir:', e));
  }
}

function playToastSound() {
  playSound('toast-sound');
}

function playClickSound() {
  playSound('click-sound');
}

// Function to show toast notifications
function showToast(title, message, duration = 4000) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast-wrapper'; 
  toast.innerHTML = `
    <svg class="bell-icon" viewBox="0 0 24 24">
      <path d="M12 24c1.1 0 1.99-.9 1.99-2H10c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V6c0-.83-.67-1.5-1.5-1.5S10.5 5.17 10.5 6v.68C7.63 7.36 6 9.92 6 13v5l-2 2v1h16v-1l-2-2z"/>
    </svg>
    <div class="toast-content">
      <strong>${title}</strong>
      <span>${message}</span>
    </div>
  `;
  
  while (container.firstChild) {
    container.firstChild.remove();
  }
  if (currentToastTimeout) {
    clearTimeout(currentToastTimeout);
    currentToastTimeout = null;
  }

  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('entering');
  }, 10); 
  
  playToastSound();
  currentToastTimeout = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px) scale(0.9)';
    setTimeout(() => {
      toast.remove();
      currentToastTimeout = null;
    }, 300);
  }, duration);
}

const quotes = [
  "Ketekunan adalah kunci keberhasilan.",
  "Kesuksesan dimulai dengan langkah pertama.",
  "Jangan menyerah, hari ini sulit, besok akan lebih baik.",
  "Bekerja keraslah, impianmu menantimu.",
  "Setiap usaha tidak akan mengkhianati hasil."
];

function getDayNameID(dayIndex) {
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  return days[dayIndex];
}

// --- DOMContentLoaded - Initialize app ---
document.addEventListener('DOMContentLoaded', function() {
  const loginBtn = document.getElementById('loginBtn');
  loginBtn.addEventListener('click', handleLogin);

  document.getElementById('nama').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') document.getElementById('nimInput').focus();
  });
  document.getElementById('nimInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') handleLogin();
  });

  // Confirmation popups event listeners
  document.getElementById('confirmResetYes').onclick = function() {
    playClickSound();
    if (currentResetContentId) resetSchedule(currentResetContentId);
    closeResetConfirmPopup();
  };
  document.getElementById('confirmResetNo').onclick = function() {
    playClickSound();
    closeResetConfirmPopup();
  };

  document.getElementById('confirmDeleteYes').onclick = function() {
    playClickSound();
    if (currentDeleteItemElement) {
        currentDeleteItemElement.remove();
        showToast('Berhasil', 'Item dihapus.');
        currentDeleteItemElement = null;
    }
    closeDeleteConfirmPopup();
  };
  document.getElementById('confirmDeleteNo').onclick = function() {
    playClickSound();
    currentDeleteItemElement = null;
    closeDeleteConfirmPopup();
  };

  document.getElementById('confirmThemeYes').onclick = function() {
    playClickSound();
    applyTheme();
  };
  document.getElementById('confirmThemeNo').onclick = function() {
    playClickSound();
    closeThemeConfirmPopup();
  };

  document.getElementById('confirmDefaultThemeYes').onclick = function() {
    playClickSound();
    applyDefaultTheme();
  };
  document.getElementById('confirmDefaultThemeNo').onclick = function() {
    playClickSound();
    closeDefaultThemeConfirmPopup();
  };

  // Save confirmation event listeners
  document.getElementById('confirmSaveYes').onclick = function() {
      playClickSound();
      if (activeEditableContentId === 'editCatatan') {
          saveCatatan();
          showToast('Berhasil', 'Catatan telah disimpan.');
      } else if (activeEditableContentId === 'editJadwal') {
          saveEditedSchedule(); 
      }
      closeSaveConfirmPopup();
      // After saving, navigate back to the previous non-edit slide
      if (historyState.length > 1) {
        const previousState = historyState[historyState.length - 2]; // Get the state *before* the edit slide
        navigateTo(previousState.slideId, previousState.contentId, false); // Navigate without pushing new state
      } else {
        goToMenu(); // Fallback to menu if no previous state
      }
  };
  document.getElementById('confirmSaveNo').onclick = function() {
      playClickSound();
      if (activeEditableContentId === 'editCatatan') {
          document.getElementById('catatanContent').innerHTML = previousCatatanText;
          document.getElementById('editCatatanTextarea').value = convertHtmlToPlainText(previousCatatanText);
      } else if (activeEditableContentId === 'editJadwal') {
          loadSavedJadwalForId(currentEditTargetId);
      }
      showToast('Info', 'Perubahan tidak disimpan.');
      closeSaveConfirmPopup();
      // Navigate back to the previous non-edit slide
      if (historyState.length > 1) {
        const previousState = historyState[historyState.length - 2]; 
        navigateTo(previousState.slideId, previousState.contentId, false); 
      } else {
        goToMenu(); 
      }
  };
  document.getElementById('confirmSaveCancel').onclick = function() {
      playClickSound();
      closeSaveConfirmPopup();
      // Do nothing, stay on current slide
  };

  loadSavedTheme(); 

  if (lastLoggedInUser) {
    document.getElementById('nama').value = lastLoggedInUser;
    let storedNim = localStorage.getItem(`${lastLoggedInUser}_nim`);
    if (storedNim) document.getElementById('nimInput').value = storedNim;
  }

  updateCircularButtonVisibility();
  loadSavedJadwal();
  updateDigitalClock();
  setInterval(updateDigitalClock, 1000);

  // --- Android Back Button / Browser History Listener ---
  window.addEventListener('popstate', function(event) {
      isNavigatingBack = true;
      handlePopState(event.state);
  });
  // Initial push state for the login screen
  if (document.getElementById('login').style.display !== 'none') {
      pushState('login');
  }
});

// --- History Management Functions ---
function pushState(slideId, contentId = null) {
    const state = { slideId: slideId, contentId: contentId };
    history.pushState(state, '', `#${slideId}`);
    historyState.push(state);
}

function handlePopState(state) {
    // If coming from a confirmed save/discard, don't re-prompt
    if (activeEditableContentId && !isNavigatingBack) {
        // This case should ideally not be reached if tutupSlide handles save prompt correctly
        // before the history state is actually popped by the browser.
        // But as a safeguard, we could re-prompt here if needed.
        return; 
    }

    // Handle popups first
    const popups = document.querySelectorAll('.popup-overlay.active, .tutorial-overlay.active');
    const agendakuSidebar = document.getElementById('agendakuSidebar');

    if (agendakuSidebar.classList.contains('active')) {
        closeAgendakuBranding();
        return; 
    }

    if (popups.length > 0) {
        popups.forEach(popup => {
            // Ensure correct close function is called
            if (popup.id === 'notificationPopup') closeNotification();
            else if (popup.id === 'tutorialPopup') closeMainTutorial();
            else if (popup.id === 'helpPopupOverlay') closeHelpPopup();
            else if (popup.id === 'kritikSaranPopup') closeKritikSaranPopup();
            else if (popup.id === 'resetConfirmPopup') closeResetConfirmPopup();
            else if (popup.id === 'deleteConfirmPopup') closeDeleteConfirmPopup();
            else if (popup.id === 'themeConfirmPopup') closeThemeConfirmPopup();
            else if (popup.id === 'defaultThemeConfirmPopup') closeDefaultThemeConfirmPopup();
            else if (popup.id === 'saveConfirmPopup') closeSaveConfirmPopup();
        });
        return; // Don't proceed to slide navigation yet
    }

    if (historyState.length > 1) {
        historyState.pop(); // Remove current state
        const previousState = historyState[historyState.length - 1]; // Get the new top of the stack
        if (previousState) {
            navigateTo(previousState.slideId, previousState.contentId, false); // false to prevent pushing new state
        } else {
            // Should not happen if initial login pushes a state
            kembaliKeLogin();
        }
    } else if (historyState.length === 1 && historyState[0].slideId === 'login') {
        // Already at login, no further back navigation within app
        // Browser might try to go back further, but our app logic stops here.
        // You might want to exit the app or minimize it on a native wrapper.
        // For a web app, it just stays on the login screen.
        isNavigatingBack = false; // Reset flag
    } else {
        // This is likely the very first load or a direct URL access.
        // If already on login, do nothing or prompt to exit app.
        if (document.getElementById('login').style.display !== 'flex') {
            kembaliKeLogin();
            // Optionally push login state again to ensure history is consistent if directly loaded into a slide
            if (historyState.length === 0 || historyState[historyState.length - 1].slideId !== 'login') {
                pushState('login');
            }
        }
        isNavigatingBack = false; // Reset flag
    }
    isNavigatingBack = false; // Reset flag after handling
}

// New generic navigation function
function navigateTo(slideId, contentId = null, pushToHistory = true) {
    document.querySelectorAll('.overlay, .slide').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.slide').forEach(slide => slide.classList.remove('active'));

    const targetElement = document.getElementById(slideId);
    if (targetElement) {
        targetElement.style.display = (slideId === 'login' || slideId === 'menu') ? 'flex' : 'flex'; // overlays are flex, slides are flex
        setTimeout(() => {
            targetElement.classList.add('active');
        }, 10);
    }

    if (pushToHistory) {
        pushState(slideId, contentId);
    }

    updateCircularButtonVisibility(true); // Ensure buttons are visible on valid slides
    document.getElementById('helpBtnJadwal').style.display = (slideId === 'jadwal') ? 'flex' : 'none';
    document.getElementById('helpBtnKuliah').style.display = (slideId === 'kuliah') ? 'flex' : 'none';

    // Close Agendaku branding sidebar if open
    closeAgendakuBranding();

    // Handle specific slide logic after navigation
    if (slideId === 'editJadwal' && contentId) {
        currentEditTargetId = contentId;
        const contentElement = document.getElementById(contentId);
        if (contentId === 'jadwalContent') {
            document.getElementById('editJadwalTitle').textContent = 'Edit Jadwal Kegiatan';
            loadScheduleToEditor(contentElement, 'Kegiatan Harian', true); 
        } else if (contentId === 'kuliahContent') {
            document.getElementById('editJadwalTitle').textContent = 'Edit Jadwal Kuliah/Sekolah';
            loadScheduleToEditor(contentElement, 'Jadwal Kuliah/Sekolah', false); 
        }
    } else if (slideId === 'editCatatan') {
        previousCatatanText = document.getElementById('catatanContent').innerHTML;
        document.getElementById('editCatatanTextarea').value = convertHtmlToPlainText(document.getElementById('catatanContent').innerHTML);
    }
}

// --- Core UI Navigation Functions ---

function updateDigitalClock() {
  const now = new Date();
  const dateOptions = { day: '2-digit', month: 'long', year: 'numeric' };
  const timeOptions = { hour: '2-digit', minute: '2-digit', hourCycle: 'h23' };

  const dateString = now.toLocaleDateString('id-ID', dateOptions);
  const formattedDate = dateString.replace(/,/g, '').replace(/ /g, ' ');
  const timeString = now.toLocaleTimeString('id-ID', timeOptions);

  const fullDateTimeString = `${formattedDate} | ${timeString}`;
  document.getElementById('digitalClock').textContent = fullDateTimeString;
  if (document.getElementById('digitalClockMenu')) document.getElementById('digitalClockMenu').textContent = fullDateTimeString;
}

function handleLogin() {
  const inputNama = document.getElementById('nama').value.trim();
  const inputNim = document.getElementById('nimInput').value.trim();

  if (!inputNama) {
    showToast('Peringatan', 'Silakan masukkan nama Anda terlebih dahulu.');
    return;
  }

  currentScheduleOwner = 'shared';
  localStorage.setItem('currentScheduleOwner', 'shared');

  namaUser = inputNama;
  nimUser = inputNim;
  
  localStorage.setItem('lastLoggedInUser', namaUser);
  localStorage.setItem(`${namaUser}_nim`, nimUser);

  const loginBtn = document.getElementById('loginBtn');
  loginBtn.style.transform = 'scale(0.95)';
  setTimeout(() => {
    loginBtn.style.transform = 'scale(1)';
    processLogin();
  }, 200);
}

function processLogin() {
  navigateTo('menu'); // Use the new navigateTo function
  document.getElementById('userNameDisplayMenu').textContent = namaUser;
  document.getElementById('userNimDisplayMenu').textContent = nimUser ? `Nim/Kelas: ${nimUser}` : 'Nim/Kelas: -';
  document.getElementById('userInfoDisplayMenu').style.display = 'block';

  document.getElementById('userInfoDisplayLogin').style.display = 'none';

  document.getElementById('namaInfo').textContent = `Nama: ${namaUser}`;
  document.getElementById('nimInfo').textContent = nimUser ? `Nim/Kelas: ${nimUser}` : 'Nim/Kelas: -';

  updateCircularButtonVisibility();
  loadSavedJadwal();
  showToast('Selamat Datang!', `Halo ${namaUser}, Aplikasi Agendaku siap digunakan.`);
  showMainTutorial();
}

function bukaSlide(slideId, contentId = null) {
  playClickSound();
  navigateTo(slideId, contentId);
}

// Function to handle closing slides and save prompts
function tutupSlide(slideId) {
    playClickSound();
    let shouldPromptSave = false;
    let message = '';

    if (slideId === 'editJadwal') {
        const currentContent = buildScheduleFromEditor();
        let originalContentHTML = '';
        if (currentEditTargetId === 'jadwalContent') {
            originalContentHTML = localStorage.getItem(`shared_${currentEditTargetId}`) || defaultJadwalContent;
        } else if (currentEditTargetId === 'kuliahContent') {
            originalContentHTML = localStorage.getItem(`shared_${currentEditTargetId}`) || defaultKuliahContent;
        }

        const normalizeHTML = (html) => html.replace(/\s+/g, ' ').trim();
        if (normalizeHTML(currentContent) !== normalizeHTML(originalContentHTML)) { 
            shouldPromptSave = true;
            message = `Anda sedang mengedit ${document.getElementById('editJadwalTitle').textContent.replace('Edit ', '')}. Apakah Anda ingin menyimpan perubahan?`;
        }
    } else if (slideId === 'editCatatan') {
        const currentCatatanText = document.getElementById('editCatatanTextarea').value.trim();
        const originalCatatanHtml = localStorage.getItem(`shared_catatanContent`) || defaultCatatanContent;
        const originalCatatanPlainText = convertHtmlToPlainText(originalCatatanHtml).trim(); 

        if (currentCatatanText !== originalCatatanPlainText) {
            shouldPromptSave = true;
            message = 'Anda sedang mengedit Catatan Pribadi. Apakah Anda ingin menyimpan perubahan?';
        }
    } else if (slideId === 'instruksi') { // Special case for Instruksi, always goes back to Info
        navigateTo('info', null, false); // Do not push to history again, as it's a "back" action
        return;
    }

    if (shouldPromptSave) {
        activeEditableContentId = slideId; 
        document.getElementById('saveConfirmMessage').textContent = message;
        document.getElementById('saveConfirmPopup').classList.add('active');
        playToastSound();
        return;
    }

    // If no changes or not an edit slide, simply go back in history
    if (historyState.length > 1) {
        history.back(); // This will trigger popstate, which calls handlePopState
    } else {
        // If at menu or login and no other state, stay there or go to login
        goToMenu();
    }
}

// Forced closing without save prompts
function forceTutupSlide() {
  const activeSlide = document.querySelector('.slide.active');
  if (activeSlide) {
    activeSlide.classList.remove('active');
    setTimeout(() => {
      activeSlide.style.display = 'none';
      document.getElementById('menu').style.display = 'flex';
      updateCircularButtonVisibility();
    }, 300);
  } else {
    document.getElementById('menu').style.display = 'flex';
    updateCircularButtonVisibility();
  }
  currentEditTargetId = null; 
  activeEditableContentId = null; 
  document.getElementById('helpBtnJadwal').style.display = 'none';
  document.getElementById('helpBtnKuliah').style.display = 'none';
}

// Go back from the edit slide to its originating schedule slide
function goToPreviousSlideFromEdit() {
    let originalSlideId = '';
    if (currentEditTargetId === 'jadwalContent') {
        originalSlideId = 'jadwal';
    } else if (currentEditTargetId === 'kuliahContent') {
        originalSlideId = 'kuliah';
    } else if (activeEditableContentId === 'editCatatan') { 
        originalSlideId = 'catatan';
    }
    navigateTo(originalSlideId, null, false); // Don't push to history, we're returning
}

function closeSaveConfirmPopup() {
    document.getElementById('saveConfirmPopup').classList.remove('active');
}

// --- Jadwal Editing Logic (New) ---
function loadScheduleToEditor(contentElement, title, isDailyActivity = false) { 
    const editorContainer = document.getElementById('editScheduleContent');
    editorContainer.innerHTML = ''; 

    document.getElementById('editJadwalTitle').textContent = `Edit ${title}`;

    const sections = Array.from(contentElement.querySelectorAll('h3'));
    sections.forEach(h3 => {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'edit-schedule-group';
        groupDiv.innerHTML = `<h3>${h3.textContent}</h3>`;
        
        const ul = h3.nextElementSibling;
        if (ul && ul.tagName === 'UL') {
            Array.from(ul.children).forEach(li => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'edit-schedule-item';
                
                let inputText = li.textContent.trim();
                let inputHtml = '';

                if (isDailyActivity) {
                    const colonIndex = inputText.indexOf(':');
                    let timeLabel = '';
                    let activityText = inputText;
                    if (colonIndex !== -1) {
                        timeLabel = inputText.substring(0, colonIndex).trim().replace('<strong>', '').replace('</strong>', ''); 
                        activityText = inputText.substring(colonIndex + 1).trim();
                    }
                    inputHtml = `
                        <select class="time-selector">
                            <option value="Shubuh" ${timeLabel === 'Shubuh' ? 'selected' : ''}>Shubuh</option>
                            <option value="Pagi" ${timeLabel === 'Pagi' ? 'selected' : ''}>Pagi</option>
                            <option value="Dhuhur" ${timeLabel === 'Dhuhur' ? 'selected' : ''}>Dhuhur</option>
                            <option value="Siang" ${timeLabel === 'Siang' ? 'selected' : ''}>Siang</option>
                            <option value="Ashar" ${timeLabel === 'Ashar' ? 'selected' : ''}>Ashar</option>
                            <option value="Sore" ${timeLabel === 'Sore' ? 'selected' : ''}>Sore</option>
                            <option value="Maghrib" ${timeLabel === 'Maghrib' ? 'selected' : ''}>Maghrib</option>
                            <option value="Isya" ${timeLabel === 'Isya' ? 'selected' : ''}>Isya</option>
                            <option value="Malam" ${timeLabel === 'Malam' ? 'selected' : ''}>Malam</option>
                        </select>
                        <input type="text" value="${activityText}" placeholder="Makan mie">
                    `;
                } else {
                    const timeMatch = inputText.match(/^(\d{2}\.\d{2}-\d{2}\.\d{2}):\s*(.*)/);
                    let timeRange = '';
                    let activityText = inputText;

                    if (timeMatch) {
                        timeRange = timeMatch[1].replace('.', ':'); 
                        activityText = timeMatch[2].trim();
                    }

                    let startTime = '';
                    let endTime = '';
                    if (timeRange.includes('-')) {
                        const times = timeRange.split('-');
                        startTime = times[0];
                        endTime = times[1];
                    }

                    inputHtml = `
                        <input type="time" value="${startTime}"> - 
                        <input type="time" value="${endTime}">
                        <input type="text" value="${activityText}">
                    `;
                }
                
                itemDiv.innerHTML = `
                    ${inputHtml}
                    <div class="item-actions">
                        <button class="add-item-btn" onclick="addItem(this, ${isDailyActivity})">➕</button>
                        <button class="delete-item-btn" onclick="confirmDeleteItem(this)">🗑️</button>
                    </div>
                `;
                groupDiv.appendChild(itemDiv);
            });
        }

        const newEntryDiv = document.createElement('div');
        newEntryDiv.className = 'add-new-entry';
        
        let newEntryInputHtml = '';
        if (isDailyActivity) {
            newEntryInputHtml = `
                <select class="time-selector">
                    <option value="Shubuh">Shubuh</option>
                    <option value="Pagi">Pagi</option>
                    <option value="Dhuhur">Dhuhur</option>
                    <option value="Siang">Siang</option>
                    <option value="Ashar">Ashar</option>
                    <option value="Sore">Sore</option>
                    <option value="Maghrib">Maghrib</option>
                    <option value="Isya">Isya</option>
                    <option value="Malam">Malam</option>
                </select>
                <input type="text" placeholder="Tambah kegiatan baru...">
            `;
        } else {
            newEntryInputHtml = `
                <input type="time" value="00:00"> - 
                <input type="time" value="00:00">
                <input type="text" placeholder="Tambah mata kuliah/pelajaran...">
            `;
        }

        newEntryDiv.innerHTML = `
            ${newEntryInputHtml}
            <button onclick="addNewEntry(this, ${isDailyActivity})">Tambah</button>
        `;
        groupDiv.appendChild(newEntryDiv);

        editorContainer.appendChild(groupDiv);
    });
}

function addItem(button, isDailyActivity = false) { 
    playClickSound();
    const itemDiv = button.closest('.edit-schedule-item');
    const newItemDiv = document.createElement('div');
    newItemDiv.className = 'edit-schedule-item';

    let inputHtml = '';
    if (isDailyActivity) {
        inputHtml = `
            <select class="time-selector">
                <option value="Shubuh">Shubuh</option>
                <option value="Pagi">Pagi</option>
                <option value="Dhuhur">Dhuhur</option>
                <option value="Siang">Siang</option>
                <option value="Ashar">Ashar</option>
                <option value="Sore">Sore</option>
                <option value="Maghrib">Maghrib</option>
                <option value="Isya">Isya</option>
                <option value="Malam">Malam</option>
            </select>
            <input type="text" value="" placeholder="Kegiatan Anda">
        `;
    } else {
        inputHtml = `
            <input type="time" value="00:00"> - 
            <input type="time" value="00:00">
            <input type="text" value="" placeholder="Mata Kuliah/Pelajaran">
        `;
    }

    newItemDiv.innerHTML = `
        ${inputHtml}
        <div class="item-actions">
            <button class="add-item-btn" onclick="addItem(this, ${isDailyActivity})">➕</button>
            <button class="delete-item-btn" onclick="confirmDeleteItem(this)">🗑️</button>
        </div>
    `;
    itemDiv.parentNode.insertBefore(newItemDiv, itemDiv.nextSibling);
    newItemDiv.querySelector('input[type="text"]').focus(); 
    showToast('Berhasil', 'Item baru ditambahkan.');
}

function confirmDeleteItem(button) {
    playClickSound();
    currentDeleteItemElement = button.closest('.edit-schedule-item');
    document.getElementById('deleteConfirmPopup').classList.add('active');
    playToastSound();
}

function closeDeleteConfirmPopup() {
    document.getElementById('deleteConfirmPopup').classList.remove('active');
    currentDeleteItemElement = null;
}

function addNewEntry(button, isDailyActivity = false) { 
    playClickSound();
    const groupDiv = button.closest('.edit-schedule-group');
    let inputField;
    let newItemText;
    let timeSelectorValue = '';
    let startTime = '00:00';
    let endTime = '00:00';

    if (isDailyActivity) {
        timeSelectorValue = button.previousElementSibling.previousElementSibling.value;
        inputField = button.previousElementSibling;
        newItemText = inputField.value.trim();
    } else {
        inputField = button.previousElementSibling; 
        endTime = inputField.previousElementSibling.value; 
        startTime = inputField.previousElementSibling.previousElementSibling.value; 
        newItemText = inputField.value.trim();
    }

    if (!newItemText && !isDailyActivity) { 
        showToast('Peringatan', 'Isi deskripsi entri baru terlebih dahulu.');
        return;
    } else if (!newItemText && isDailyActivity) { 
        showToast('Peringatan', 'Isi deskripsi kegiatan baru terlebih dahulu.');
        return;
    }

    const newItemDiv = document.createElement('div');
    newItemDiv.className = 'edit-schedule-item';

    let inputHtml;
    if (isDailyActivity) {
        inputHtml = `
            <select class="time-selector">
                <option value="Shubuh" ${timeSelectorValue === 'Shubuh' ? 'selected' : ''}>Shubuh</option>
                <option value="Pagi" ${timeSelectorValue === 'Pagi' ? 'selected' : ''}>Pagi</option>
                <option value="Dhuhur" ${timeSelectorValue === 'Dhuhur' ? 'selected' : ''}>Dhuhur</option>
                <option value="Siang" ${timeSelectorValue === 'Siang' ? 'selected' : ''}>Siang</option>
                <option value="Ashar" ${timeSelectorValue === 'Ashar' ? 'selected' : ''}>Ashar</option>
                <option value="Sore" ${timeSelectorValue === 'Sore' ? 'selected' : ''}>Sore</option>
                <option value="Maghrib" ${timeSelectorValue === 'Maghrib' ? 'selected' : ''}>Maghrib</option>
                <option value="Isya" ${timeSelectorValue === 'Isya' ? 'selected' : ''}>Isya</option>
                <option value="Malam" ${timeSelectorValue === 'Malam' ? 'selected' : ''}>Malam</option>
            </select>
            <input type="text" value="${newItemText}">
        `;
        if (inputField) inputField.value = ''; 
    } else {
        inputHtml = `
            <input type="time" value="${startTime}"> - 
            <input type="time" value="${endTime}">
            <input type="text" value="${newItemText}">
        `;
        if (inputField) inputField.value = ''; 
        if (inputField.previousElementSibling) inputField.previousElementSibling.value = '00:00'; 
        if (inputField.previousElementSibling && inputField.previousElementSibling.previousElementSibling) 
            inputField.previousElementSibling.previousElementSibling.value = '00:00'; 
    }

    newItemDiv.innerHTML = `
        ${inputHtml}
        <div class="item-actions">
            <button class="add-item-btn" onclick="addItem(this, ${isDailyActivity})">➕</button>
            <button class="delete-item-btn" onclick="confirmDeleteItem(this)">🗑️</button>
        </div>
    `;
    groupDiv.insertBefore(newItemDiv, button.closest('.add-new-entry'));
    showToast('Berhasil', 'Entri baru ditambahkan.');
}

function buildScheduleFromEditor() {
    const editorContainer = document.getElementById('editScheduleContent');
    let newHtml = '';

    Array.from(editorContainer.querySelectorAll('.edit-schedule-group')).forEach(groupDiv => {
        const isDailyActivity = groupDiv.querySelector('.time-selector') !== null; 
        newHtml += `<h3>${groupDiv.querySelector('h3').textContent}</h3>`;
        newHtml += '<ul>';
        Array.from(groupDiv.querySelectorAll('.edit-schedule-item')).forEach(itemDiv => {
            let itemText;
            if (isDailyActivity) {
                const time = itemDiv.querySelector('.time-selector').value;
                const activity = itemDiv.querySelector('input[type="text"]').value.trim();
                itemText = `<strong>${time}:</strong> ${activity}`;
            } else {
                const startTime = itemDiv.querySelector('input[type="time"]:nth-of-type(1)').value;
                const endTime = itemDiv.querySelector('input[type="time"]:nth-of-type(2)').value;
                const activity = itemDiv.querySelector('input[type="text"]').value.trim();
                itemText = `${startTime.replace(':', '.')}-${endTime.replace(':', '.')}: ${activity}`;
            }
            newHtml += `<li>${itemText}</li>`;
        });
        newHtml += '</ul>';
    });
    return newHtml;
}

function saveEditedSchedule() {
    playClickSound();
    const newHtml = buildScheduleFromEditor();
    document.getElementById(currentEditTargetId).innerHTML = newHtml;
    localStorage.setItem(`shared_${currentEditTargetId}`, newHtml);
    showToast('Berhasil', 'Jadwal telah disimpan.');
    goToPreviousSlideFromEdit();
}

// --- Catatan Editing Logic (New) ---
function saveCatatan() {
    playClickSound();
    const textarea = document.getElementById('editCatatanTextarea');
    const newContent = textarea.value;
    const catatanContentDiv = document.getElementById('catatanContent');
    
    const htmlContent = newContent.split('\n').map(line => `<p>${line}</p>`).join('');
    catatanContentDiv.innerHTML = htmlContent;

    localStorage.setItem(`shared_catatanContent`, htmlContent);
}

function convertHtmlToPlainText(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.innerText || div.textContent;
}

// --- General Save/Load/Reset Functions ---
function saveJadwal(contentId) { 
  const content = document.getElementById(contentId).innerHTML;
  localStorage.setItem(`shared_${contentId}`, content);
}

function loadSavedJadwal() {
  const savedJadwalContent = localStorage.getItem(`shared_jadwalContent`);
  const savedKuliahContent = localStorage.getItem(`shared_kuliahContent`);
  const savedCatatanContent = localStorage.getItem(`shared_catatanContent`);

  document.getElementById('jadwalContent').innerHTML = savedJadwalContent || defaultJadwalContent;
  document.getElementById('kuliahContent').innerHTML = savedKuliahContent || defaultKuliahContent;
  document.getElementById('catatanContent').innerHTML = savedCatatanContent || defaultCatatanContent;
}

function loadSavedJadwalForId(contentId) { 
    const savedContent = localStorage.getItem(`shared_${contentId}`);
    let defaultContent;
    if (contentId === 'jadwalContent') {
        defaultContent = defaultJadwalContent;
    } else if (contentId === 'kuliahContent') {
        defaultContent = defaultKuliahContent;
    } else if (contentId === 'catatanContent') { 
        defaultContent = defaultCatatanContent;
    }
    document.getElementById(contentId).innerHTML = savedContent || defaultContent;
}

function confirmResetSchedule(contentId) {
  playClickSound();
  currentResetContentId = contentId;
  document.getElementById('resetConfirmPopup').classList.add('active');
  playToastSound();
}

function resetSchedule(contentId) {
  let defaultContent = '';
  if (contentId === 'jadwalContent') {
    defaultContent = defaultJadwalContent;
  } else if (contentId === 'kuliahContent') {
    defaultContent = defaultKuliahContent;
  } else if (contentId === 'catatanContent') { 
    defaultContent = defaultCatatanContent;
  }
  document.getElementById(contentId).innerHTML = defaultContent;
  localStorage.setItem(`shared_${contentId}`, defaultContent); 
  showToast('Reset Berhasil', 'Jadwal telah kembali ke pengaturan awal.');
}

function closeResetConfirmPopup() {
  document.getElementById('resetConfirmPopup').classList.remove('active');
  currentResetContentId = null;
}

// --- Notifikasi Jadwal Hari Ini ---
function showScheduleNow() {
  playClickSound();
  const now = new Date();
  const currentDayIndex = now.getDay();
  const dayName = getDayNameID(currentDayIndex);

  const jadwalContentDiv = document.getElementById('jadwalContent');
  const kuliahContentDiv = document.getElementById('kuliahContent');

  let kegiatanHtml = '';
  let kuliahHtml = '';

  const tempKegiatanDiv = document.createElement('div');
  tempKegiatanDiv.innerHTML = jadwalContentDiv.innerHTML;
  const orderedTimes = ["Shubuh", "Pagi", "Dhuhur", "Siang", "Ashar", "Sore", "Maghrib", "Isya", "Malam"];
  let dailyActivities = [];

  tempKegiatanDiv.querySelectorAll('h3').forEach(h3 => {
      if (h3.textContent.trim().toLowerCase().includes(dayName.toLowerCase())) {
          let currentElement = h3.nextElementSibling;
          if (currentElement && currentElement.tagName === 'UL') {
              Array.from(currentElement.querySelectorAll('li')).forEach(li => {
                  const liText = li.textContent.trim();
                  if (liText) {
                      const colonIndex = liText.indexOf(':');
                      let timeLabel = '';
                      let activityText = liText;
                      if (colonIndex !== -1) {
                          timeLabel = liText.substring(0, colonIndex).trim().replace('<strong>', '').replace('</strong>', ''); 
                          activityText = liText.substring(colonIndex + 1).trim();
                      }
                      dailyActivities.push({ time: timeLabel, activity: activityText });
                  }
              });
          }
      }
  });

  dailyActivities.sort((a, b) => {
      const indexA = orderedTimes.indexOf(a.time);
      const indexB = orderedTimes.indexOf(b.time);
      return indexA - indexB;
  });

  if (dailyActivities.length > 0) {
      kegiatanHtml += `<ul id="notifKegiatanList">`;
      dailyActivities.forEach(item => {
          if (item.time !== "Unknown") {
              kegiatanHtml += `<li><strong>${item.time}:</strong> ${item.activity}</li>`;
          } else {
              kegiatanHtml += `<li>${item.activity}</li>`;
          }
      });
      kegiatanHtml += `</ul>`;
  } else {
      kegiatanHtml = `<div class="no-schedule-message">Tidak ada kegiatan terjadwal untuk hari ini.</div>`;
  }

  const tempKuliahDiv = document.createElement('div');
  tempKuliahDiv.innerHTML = kuliahContentDiv.innerHTML;
  const kuliahEntries = [];

  tempKuliahDiv.querySelectorAll('h3').forEach(h3 => {
      if (h3.textContent.trim().toLowerCase().includes(dayName.toLowerCase())) {
          let currentElement = h3.nextElementSibling;
          while (currentElement && currentElement.tagName === 'UL') {
              Array.from(currentElement.querySelectorAll('li')).forEach(li => {
                  const liText = li.textContent.trim();
                  if (liText && liText !== '(silahkan sesuaikan dengan fitur edit)' && liText.toLowerCase() !== 'libur') {
                      const timeMatch = liText.match(/^(\d{2}\.\d{2})-(\d{2}\.\d{2}):\s*(.*)/);
                      if (timeMatch) {
                          const startTime = timeMatch[1].replace('.', ':');
                          const endTime = timeMatch[2].replace('.', ':');
                          const activity = timeMatch[3].trim();
                          kuliahEntries.push({ startTime: startTime, endTime: endTime, activity: activity });
                      } else {
                          kuliahEntries.push({ startTime: '00:00', endTime: '00:00', activity: liText });
                      }
                  } else if (liText.toLowerCase() === 'libur') {
                      kuliahEntries.push({ startTime: '99:99', endTime: '99:99', activity: 'Libur' }); 
                  }
              });
              currentElement = currentElement.nextElementSibling;
          }
      }
  });

  kuliahEntries.sort((a, b) => {
      if (a.activity === 'Libur') return 1; 
      if (b.activity === 'Libur') return -1;
      const timeA = new Date(`2000/01/01 ${a.startTime}`);
      const timeB = new Date(`2000/01/01 ${b.startTime}`);
      return timeA - timeB;
  });

  if (kuliahEntries.length > 0) {
      kuliahHtml += `<ul id="notifKuliahList">`;
      kuliahEntries.forEach(item => {
          if (item.activity === 'Libur') {
              kuliahHtml += `<li>Libur</li>`;
          } else {
              kuliahHtml += `<li>${item.startTime.replace(':', '.')}-${item.endTime.replace(':', '.')}: ${item.activity}</li>`;
          }
      });
      kuliahHtml += `</ul>`;
  } else {
      kuliahHtml = `<div class="no-schedule-message">Tidak ada jadwal kuliah/sekolah untuk hari ini.</div>`;
  }

  document.getElementById('notificationContent').innerHTML = `
    <div class="jadwal-group">
      <h4>Kegiatan Harianmu (${dayName}):</h4>
      ${kegiatanHtml}
    </div>
    <div class="jadwal-group">
      <h4>Jadwal Kuliah/Sekolah (${dayName}):</h4>
      ${kuliahHtml}
    </div>
  `;

  document.getElementById('notificationPopup').classList.add('active');
  playToastSound();
}

function closeNotification() {
  playClickSound();
  document.getElementById('notificationPopup').classList.remove('active');
}

// --- General App Flow Functions ---
function kembaliKeLogin() {
  playClickSound();
  navigateTo('login'); // Navigate to login, pushing to history
  updateCircularButtonVisibility(false);
}

function showMainTutorial() {
  document.getElementById('tutorialPopup').style.display = 'flex';
  playToastSound();
}

function closeMainTutorial() {
  playClickSound();
  document.getElementById('tutorialPopup').style.display = 'none';
}

function confirmImageTheme(imageUrl) {
  playClickSound();
  selectedImageTheme = imageUrl;
  document.getElementById('themeConfirmPopup').classList.add('active');
  playToastSound();
}

function applyTheme() {
  document.body.style.setProperty('--bg-image-url', `url('${selectedImageTheme}')`); 
  localStorage.setItem('savedTheme', selectedImageTheme);
  showToast('Berhasil', 'Tema latar belakang berhasil diganti.');
  closeThemeConfirmPopup();
  goToMenu();
}

function closeThemeConfirmPopup() {
  document.getElementById('themeConfirmPopup').classList.remove('active');
  selectedImageTheme = '';
}

function confirmDefaultTheme() {
  playClickSound();
  document.getElementById('defaultThemeConfirmPopup').classList.add('active');
  playToastSound();
}

function applyDefaultTheme() {
  document.body.style.setProperty('--bg-image-url', `url('${DEFAULT_BACKGROUND_IMAGE}')`); 
  localStorage.removeItem('savedTheme');
  showToast('Berhasil', 'Tema latar belakang kembali ke default.');
  closeDefaultThemeConfirmPopup();
  goToMenu();
}

function closeDefaultThemeConfirmPopup() {
  document.getElementById('defaultThemeConfirmPopup').classList.remove('active');
}

function showQuoteToast() {
    playClickSound();
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const singleQuote = quotes[randomIndex];
    showToast('Inspirasi Hari Ini', singleQuote);
}

function updateCircularButtonVisibility(show = true) {
    const homeBtn = document.getElementById('homeBtn');
    const quoteBtn = document.getElementById('quoteBtn');
    const tutorialHelpBtn = document.getElementById('tutorialHelpBtn');
    const menuIconTopRight = document.querySelector('.menu-icon-top-right'); 

    const isMenuVisible = document.getElementById('menu').style.display === 'flex';
    const isLoginVisible = document.getElementById('login').style.display === 'flex';
    const activeSlide = document.querySelector('.slide.active');
    const isAnyPopupActive = document.querySelector('.popup-overlay.active, .tutorial-overlay.active');
    const isSidebarActive = document.getElementById('agendakuSidebar').classList.contains('active');

    // Only show circular buttons if menu is visible AND no popups/sidebar are active
    const showButtons = show && isMenuVisible && !isAnyPopupActive && !isSidebarActive;

    homeBtn.style.display = showButtons ? 'flex' : 'none';
    quoteBtn.style.display = showButtons ? 'flex' : 'none';
    tutorialHelpBtn.style.display = showButtons ? 'flex' : 'none';

    // Menu icon always visible on login and menu, unless a popup/sidebar is active
    menuIconTopRight.style.display = (isLoginVisible || isMenuVisible) && !isAnyPopupActive && !isSidebarActive ? 'flex' : 'none';
    
    // Help buttons visibility is handled by navigateTo and tutupSlide based on current slide
}

function goToMenu() {
    navigateTo('menu');
    closeAgendakuBranding();
}

function showHelp(slideId) {
  playClickSound();
  let title = "Bantuan";
  let contentHtml = '';

  if (slideId === 'jadwal') {
    title = "Bantuan: Jadwal Kegiatan";
    contentHtml = `
      <p>Fitur ini memungkinkan Anda untuk mengelola kegiatan harian Anda.</p>
      <ul>
        <li><strong>Mengedit Jadwal:</strong> Klik tombol "Edit" untuk masuk ke halaman pengeditan jadwal yang lebih rinci. Di sana Anda bisa menambah, mengedit, atau menghapus setiap item. Klik "Simpan" setelah selesai.</li>
        <li><strong>Mereset Jadwal:</strong> Tombol "Reset" akan mengembalikan semua jadwal kegiatan ke pengaturan awal (default).</li>
        <li><strong>Melihat Jadwal Hari Ini:</strong> Gunakan tombol "💡" di menu utama untuk melihat ringkasan jadwal kegiatan Anda untuk hari ini.</li>
      </ul>
    `;
  } else if (slideId === 'kuliah') {
    title = "Bantuan: Jadwal Kuliah/Sekolah";
    contentHtml = `
      <p>Fitur ini memungkinkan Anda untuk mengelola jadwal pelajaran atau kuliah Anda.</p>
      <ul>
        <li><strong>Mengedit Jadwal:</strong> Klik tombol "Edit" untuk masuk ke halaman pengeditan jadwal yang lebih rinci. Di sana Anda bisa menambah, mengedit, atau menghapus setiap item. Klik "Simpan" setelah selesai.</li>
        <li><strong>Mereset Jadwal:</strong> Tombol "Reset" akan mengembalikan semua jadwal pelajaran ke pengaturan awal (default).</li>
        <li><strong>Melihat Jadwal Hari Ini:</strong> Gunakan tombol "💡" di menu utama untuk melihat ringkasan jadwal pelajaran Anda untuk hari ini.</li>
      </ul>
    `;
  }

  document.getElementById('helpPopupTitle').textContent = title;
  document.getElementById('helpPopupText').innerHTML = contentHtml;
  document.getElementById('helpPopupOverlay').classList.add('active');
  playToastSound();
}

function closeHelpPopup() {
  playClickSound();
  document.getElementById('helpPopupOverlay').classList.remove('active');
}

function loadSavedTheme() {
  const savedTheme = localStorage.getItem('savedTheme');
  if (savedTheme) {
    document.body.style.setProperty('--bg-image-url', `url('${savedTheme}')`);
  } else {
    document.body.style.setProperty('--bg-image-url', `url('${DEFAULT_BACKGROUND_IMAGE}')`);
  }
}

// --- Kritik dan Saran (New Feature) ---
function showKritikSaranPopup() {
  playClickSound();
  document.getElementById('kritikSaranTextarea').value = ''; 
  document.getElementById('kritikSaranPopup').classList.add('active');
  playToastSound();
}

function closeKritikSaranPopup() {
  playClickSound();
  document.getElementById('kritikSaranPopup').classList.remove('active');
}

function sendKritikSaran() {
  playClickSound();
  const kritikSaranText = document.getElementById('kritikSaranTextarea').value.trim();
  const adminEmail = 'uchihafans2@gmail.com'; 
  const subject = encodeURIComponent('Kritik dan Saran Aplikasi Agendaku');
  const body = encodeURIComponent(`Dari Pengguna ${namaUser} (${nimUser || 'Tidak Ada NIM'}):\n\n${kritikSaranText}`);

  if (kritikSaranText === '') {
    showToast('Peringatan', 'Silakan isi kritik atau saran Anda terlebih dahulu.');
    return;
  }

  window.location.href = `mailto:${adminEmail}?subject=${subject}&body=${body}`;
  showToast('Terkirim', 'Kritik dan saran Anda telah disiapkan di aplikasi email.');
  closeKritikSaranPopup();
}

// --- Agendaku Branding Sidebar ---
function showAgendakuBranding() {
    playClickSound();
    document.getElementById('agendakuSidebar').classList.add('active');
    updateCircularButtonVisibility(false); // Hide circular buttons when sidebar is open
}

function closeAgendakuBranding() {
    playClickSound();
    document.getElementById('agendakuSidebar').classList.remove('active');
    updateCircularButtonVisibility(); // Show circular buttons again
}