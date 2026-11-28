export function renderAloinTimerScript(): string {
  return `
    <div class="tool-card">
      <div class="tool-header">
        <div>
          <span class="tool-badge">Interactive Safety Tool</span>
          <h3>Aloin Water Flush Countdown Timer</h3>
        </div>
        <div style="font-size: 2rem;" aria-hidden="true">⏳</div>
      </div>

      <p class="tool-subtitle">
        Submerge your sliced clear aloe fillets in cold filtered water. This timer guides you through the 20-minute osmotic leaching protocol to draw out lingering yellow anthraquinones.
      </p>

      <div class="tool-panel tool-row">
        <div>
          <div class="tool-label">Time Remaining</div>
          <div id="aloin-timer-display" style="font-size: 2.75rem; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-weight: 800; color: #ecfdf5; letter-spacing: 0.05em; line-height: 1.1;">20:00</div>
        </div>

        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <button id="aloin-start-btn" type="button" class="tool-btn-primary">
            Start Flush
          </button>
          <button id="aloin-reset-btn" type="button" class="tool-btn-secondary">
            Reset
          </button>
        </div>
      </div>

      <div id="aloin-status-box" class="tool-panel" style="margin-bottom: 0;">
        <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
          <div id="aloin-status-icon" style="font-size: 1.35rem;" aria-hidden="true">💧</div>
          <div>
            <div id="aloin-status-title" style="font-weight: 700; color: #d1fae5; font-size: 0.95rem;">Phase 1: Initial Water Submersion</div>
            <div id="aloin-status-desc" style="font-size: 0.85rem; color: #a7f3d0; margin-top: 0.2rem; line-height: 1.45;">Ensure fillets are fully covered with cold water. Aloin molecules will begin diffusing across cell walls.</div>
          </div>
        </div>
      </div>
    </div>

    <script>
      (function() {
        var totalSeconds = 20 * 60;
        var currentSeconds = totalSeconds;
        var timerInterval = null;
        var isRunning = false;

        var display = document.getElementById('aloin-timer-display');
        var startBtn = document.getElementById('aloin-start-btn');
        var resetBtn = document.getElementById('aloin-reset-btn');
        var statusIcon = document.getElementById('aloin-status-icon');
        var statusTitle = document.getElementById('aloin-status-title');
        var statusDesc = document.getElementById('aloin-status-desc');

        function updateDisplay() {
          var mins = Math.floor(currentSeconds / 60);
          var secs = currentSeconds % 60;
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
            startBtn.classList.add('is-running');
            timerInterval = setInterval(function() {
              if (currentSeconds > 0) {
                currentSeconds--;
                updateDisplay();
              } else {
                clearInterval(timerInterval);
                isRunning = false;
                startBtn.textContent = 'Completed';
                startBtn.classList.remove('is-running');
                startBtn.disabled = true;
              }
            }, 1000);
          } else {
            isRunning = false;
            clearInterval(timerInterval);
            startBtn.textContent = 'Resume';
            startBtn.classList.remove('is-running');
          }
        });

        resetBtn.addEventListener('click', function() {
          clearInterval(timerInterval);
          isRunning = false;
          currentSeconds = totalSeconds;
          startBtn.disabled = false;
          startBtn.textContent = 'Start Flush';
          startBtn.classList.remove('is-running');
          updateDisplay();
        });
      })();
    </script>
  `;
}
