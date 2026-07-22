:root {
    /* Design Tokens */
    --bg-black: #030712;
    --blue-primary: #3B82F6;
    --purple-primary: #8B5CF6;
    --text-white: #F8FAFC;
    --text-muted: #94A3B8;
    --glass-bg: rgba(255, 255, 255, 0.03);
    --glass-border: rgba(255, 255, 255, 0.08);
    --container-width: 1280px;
    --transition-smooth: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background-color: var(--bg-black);
    color: var(--text-white);
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    line-height: 1.6;
    overflow-x: hidden;
}

.container {
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 0 2rem;
}

/* Background Glows */
.glow-orchestrator {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
    overflow: hidden;
}

.glow-1 {
    position: absolute;
    top: -10%;
    right: -10%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
    filter: blur(80px);
}

.glow-2 {
    position: absolute;
    bottom: 20%;
    left: -5%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
    filter: blur(80px);
}

/* Navigation */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    padding: 1.5rem 0;
    transition: var(--transition-smooth);
}

.navbar.scrolled {
    padding: 1rem 0;
    background: rgba(3, 7, 18, 0.7);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--glass-border);
}

.nav-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 1.2rem;
    letter-spacing: -0.02em;
}

.logo-icon {
    width: 12px;
    height: 12px;
    background: linear-gradient(135deg, var(--blue-primary), var(--purple-primary));
    border-radius: 3px;
    transform: rotate(45deg);
}

.nav-menu {
    display: flex;
    gap: 2.5rem;
}

.nav-link {
    color: var(--text-muted);
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    transition: color 0.3s ease;
}

.nav-link:hover {
    color: #fff;
}

/* Buttons */
.btn {
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    transition: var(--transition-smooth);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.btn-primary {
    background: #fff;
    color: #000;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2);
}

.btn-glass {
    background: var(--glass-bg);
    color: #fff;
    border: 1px solid var(--glass-border);
    backdrop-filter: blur(10px);
}

.btn-glass:hover {
    background: rgba(255, 255, 255, 0.08);
}

.btn-outline {
    color: #fff;
    border: 1px solid var(--glass-border);
    margin-left: 1rem;
}

/* Hero Section */
.hero {
    padding: 12rem 0 8rem;
    position: relative;
}

.hero-grid {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 4rem;
    align-items: center;
}

.badge {
    background: rgba(59, 130, 246, 0.1);
    color: var(--blue-primary);
    padding: 0.4rem 1rem;
    border-radius: 100px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border: 1px solid rgba(59, 130, 246, 0.2);
    display: inline-block;
    margin-bottom: 1.5rem;
}

.hero-title {
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    line-height: 1.1;
    font-weight: 700;
    margin-bottom: 2rem;
    letter-spacing: -0.04em;
}

.text-gradient {
    background: linear-gradient(to right, var(--blue-primary), var(--purple-primary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.hero-description {
    font-size: 1.15rem;
    color: var(--text-muted);
    max-width: 500px;
    margin-bottom: 2.5rem;
}

/* Hero Visual (Glass Dashboard) */
.glass-dashboard {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 16px;
    height: 400px;
    width: 100%;
    position: relative;
    backdrop-filter: blur(10px);
    box-shadow: 0 40px 100px rgba(0, 0, 0, 0.4);
    overflow: hidden;
}

.dashboard-nav {
    height: 40px;
    border-bottom: 1px solid var(--glass-border);
    display: flex;
    align-items: center;
    padding: 0 1rem;
    gap: 1.5rem;
}

.dots { display: flex; gap: 6px; }
.dots span { width: 8px; height: 8px; border-radius: 50%; }
.d-red { background: #ff5f57; }
.d-yellow { background: #febc2e; }
.d-green { background: #28c840; }

.address-bar {
    background: rgba(255,255,255,0.05);
    font-size: 0.7rem;
    padding: 2px 20px;
    border-radius: 4px;
    color: var(--text-muted);
}

.dashboard-content { padding: 2rem; }
.skeleton-hero { height: 120px; background: rgba(255,255,255,0.03); border-radius: 8px; margin-bottom: 2rem; }
.skeleton-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
.skeleton-item { height: 80px; background: rgba(255,255,255,0.03); border-radius: 8px; }

.floating-card {
    position: absolute;
    background: rgba(15, 23, 42, 0.8);
    border: 1px solid var(--glass-border);
    padding: 1rem;
    border-radius: 12px;
    backdrop-filter: blur(20px);
    display: flex;
    align-items: center;
    gap: 1rem;
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}

.card-1 { top: 20%; right: -5%; width: 180px; }
.card-2 { bottom: 15%; left: -8%; width: 160px; }

.card-icon { width: 30px; height: 30px; border-radius: 6px; }
.card-icon.blue { background: var(--blue-primary); }
.card-icon.purple { background: var(--purple-primary); }
.card-line { height: 6px; flex: 1; background: var(--glass-border); border-radius: 3px; }

/* Mobile Menu */
.mobile-toggle {
    display: none;
    flex-direction: column;
    gap: 6px;
    background: none;
    border: none;
    cursor: pointer;
}

.mobile-toggle .line {
    width: 24px;
    height: 2px;
    background: #fff;
    transition: 0.3s;
}

@media (max-width: 992px) {
    .nav-menu { display: none; }
    .hero-grid { grid-template-columns: 1fr; text-align: center; }
    .hero-description { margin-left: auto; margin-right: auto; }
    .hero-visual { display: flex; justify-content: center; padding: 2rem 0; }
    .glass-dashboard { width: 90%; height: 320px; }
    .mobile-toggle { display: flex; }
}
