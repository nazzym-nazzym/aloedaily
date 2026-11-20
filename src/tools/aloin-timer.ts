export function renderAloinTimerScript(): string {
  return `
    <div class="bg-emerald-950 text-white rounded-2xl p-6 sm:p-8 my-8 shadow-xl border border-emerald-800">
      <div class="flex items-center justify-between border-b border-emerald-800/80 pb-4 mb-6">
        <div>
          <span class="inline-block px-3 py-1 bg-emerald-800/60 text-emerald-300 text-xs font-semibold rounded-full uppercase tracking-wider mb-1">Interactive Safety Tool</span>
          <h3 class="text-xl sm:text-2xl font-bold text-white">Aloin Water Flush Countdown Timer</h3>
        </div>
        <div class="text-3xl">⏳</div>
      </div>

      <p class="text-emerald-200 text-sm mb-6">
        Submerge your sliced clear aloe fillets in cold filtered water. This timer guides you through the 20-minute osmotic leaching protocol to draw out lingering yellow anthraquinones.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-between bg-emerald-900/60 rounded-xl p-6 mb-6">
        <div class="text-center sm:text-left mb-4 sm:mb-0">
          <div class="text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-1">Time Remaining</div>
          <div id="aloin-timer-display" class="text-4xl sm:text-5xl font-mono font-bold text-emerald-100 tracking-wider">20:00</div>
        </div>
        
        <div class="flex gap-3">
          <button id="aloin-start-btn" class="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold rounded-lg transition-all shadow-md active:scale-95">
            Start Flush
          </button>
          <button id="aloin-reset-btn" class="px-4 py-2.5 bg-emerald-800 hover:bg-emerald-700 text-emerald-200 font-medium rounded-lg transition-all">
            Reset
          </button>
        </div>
      </div>

      <div id="aloin-status-box" class="bg-emerald-900/40 rounded-xl p-4 border border-emerald-800/50">
        <div class="flex items-start gap-3">
          <div id="aloin-status-icon" class="text-xl">💧</div>
          <div>
            <div id="aloin-status-title" class="font-semibold text-emerald-200 text-sm">Phase 1: Initial Water Submersion</div>
            <div id="aloin-status-desc" class="text-xs text-emerald-300/80 mt-0.5">Ensure cubes are fully covered with cold water. Aloin molecules will begin diffusing across cell walls.</div>
          </div>
        </div>
      </div>
    </div>

    <script>
      (function() {
        let totalSeconds = 20 * 60;
        let currentSeconds = totalSeconds;
        let timerInterval = null;
        let isRunning = false;

        const display = document.getElementById('aloin-timer-display');
        const startBtn = document.getElementById('aloin-start-btn');
        const resetBtn = document.getElementById('aloin-reset-btn');
        const statusIcon = document.getElementById('aloin-status-icon');
        const statusTitle = document.getElementById('aloin-status-title');
        const statusDesc = document.getElementById('aloin-status-desc');

        function updateDisplay() {
          const mins = Math.floor(currentSeconds / 60);
          const secs = currentSeconds % 60;
          display.textContent = String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0');

          if (currentSeconds > 15 * 60) {
            statusIcon.textContent = '💧';
            statusTitle.textContent = 'Phase 1: Initial Water Submersion';
            statusDesc.textContent = 'Aloin molecules diffusing. Notice water developing a faint yellowish tint.';
          } else if (currentSeconds > 5 * 60) {
            statusIcon.textContent = '🔄';
            statusTitle.textContent = 'Phase 2: Swirl & First Rinse Check';
            statusDesc.textContent = 'Gently swirl the water. If distinctly yellow, drain and replenish with fresh cold water.';
          } else if (currentSeconds > 0) {
            statusIcon.textContent = '🧪';
            statusTitle.textContent = 'Phase 3: Final Osmotic Purification';
            statusDesc.textContent = 'Anthraquinones down to safe trace levels. Final clean water rinse pending.';
          } else {
            statusIcon.textContent = '✅';
            statusTitle.textContent = 'Flush Complete: Aloin Free!';
            statusDesc.textContent = 'Drain water completely. Taste test a tiny piece: it should taste neutral like water/cucumber.';
          }
        }

        startBtn.addEventListener('click', function() {
          if (!isRunning) {
            isRunning = true;
            startBtn.textContent = 'Pause';
            startBtn.classList.replace('bg-emerald-500', 'bg-amber-400');
            startBtn.classList.replace('hover:bg-emerald-400', 'hover:bg-amber-300');
            timerInterval = setInterval(function() {
              if (currentSeconds > 0) {
                currentSeconds--;
                updateDisplay();
              } else {
                clearInterval(timerInterval);
                isRunning = false;
                startBtn.textContent = 'Completed';
                startBtn.disabled = true;
              }
            }, 1000);
          } else {
            isRunning = false;
            clearInterval(timerInterval);
            startBtn.textContent = 'Resume';
            startBtn.classList.replace('bg-amber-400', 'bg-emerald-500');
            startBtn.classList.replace('hover:bg-amber-300', 'hover:bg-emerald-400');
          }
        });

        resetBtn.addEventListener('click', function() {
          clearInterval(timerInterval);
          isRunning = false;
          currentSeconds = totalSeconds;
          startBtn.disabled = false;
          startBtn.textContent = 'Start Flush';
          startBtn.className = 'px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold rounded-lg transition-all shadow-md active:scale-95';
          updateDisplay();
        });
      })();
    </script>
  `;
}
