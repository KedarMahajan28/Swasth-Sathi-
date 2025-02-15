// Language translations
const translations = {
    en: {
        welcome: "Welcome to Swastha Sathi",
        tagline: "Your trusted healthcare companion in rural India.",
        videoConsultation: "Video consultation",
        localPharmacies: "Local Pharmacies",
        ashaWorkerMode: "ASHA worker mode",
        symptomsChecker: "Symptoms Checker",
        ivr: "SwasthSathibot",
        governmentSchemes: "Government schemes"
    },
    hi: {
        welcome: "स्वस्थ साथी में आपका स्वागत है",
        tagline: "ग्रामीण भारत में आपका विश्वसनीय स्वास्थ्य साथी।",
        videoConsultation: "वीडियो परामर्श",
        localPharmacies: "स्थानीय फार्मेसियां",
        ashaWorkerMode: "आशा कार्यकर्ता मोड",
        symptomsChecker: "लक्षण जांचकर्ता",
        ivr: "आईवीआर",
        governmentSchemes: "सरकारी योजनाएं"
    },
    bn: {
        welcome: "স্বাস্থ্য সাথীতে স্বাগতম",
        tagline: "গ্রামীণ ভারতের আপনার বিশ্বস্ত স্বাস্থ্য সঙ্গী।",
        videoConsultation: "ভিডিও পরামর্শ",
        localPharmacies: "স্থানীয় ফার্মেসি",
        ashaWorkerMode: "আশা কর্মী মোড",
        symptomsChecker: "লক্ষণ পরীক্ষক",
        ivr: "আইভিআর",
        governmentSchemes: "সরকারী স্কিম"
    },
    te: {
        welcome: "స్వస్థ సాథికి స్వాగతం",
        tagline: "గ్రామీణ భారతదేశంలో మీ నమ్మకమైన ఆరోగ్య సహచరుడు.",
        videoConsultation: "వీడియో సంప్రదింపు",
        localPharmacies: "స్థానిక ఫార్మసీలు",
        ashaWorkerMode: "ఆశా కార్యకర్త మోడ్",
        symptomsChecker: "లక్షణాలు తనిఖీదారు",
        ivr: "ఐవిఆర్",
        governmentSchemes: "ప్రభుత్వ పథకాలు"
    },
    ta: {
        welcome: "ஸ்வஸ்த சாதிக்கு வரவேற்கிறோம்",
        tagline: "கிராமப்புற இந்தியாவில் உங்கள் நம்பகமான சுகாதார துணை.",
        videoConsultation: "வீடியோ ஆலோசனை",
        localPharmacies: "உள்ளூர் மருந்தகங்கள்",
        ashaWorkerMode: "ஆஷா தொழிலாளர் முறை",
        symptomsChecker: "அறிகுறிகள் சரிபார்ப்பவர்",
        ivr: "ஐவிஆர்",
        governmentSchemes: "அரசு திட்டங்கள்"
    }
};

// Function to change language
function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

document.getElementById('languageSelect').addEventListener('change', function() {
    changeLanguage(this.value);
});

changeLanguage('en');