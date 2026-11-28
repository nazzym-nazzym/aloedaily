export function renderDosageCalculatorScript(): string {
  return `
    <div class="tool-card">
      <div class="tool-header">
        <div>
          <span class="tool-badge">Educational Botanical Tool</span>
          <h3>Daily Aloe Vera Juice Intake Estimator</h3>
        </div>
        <div style="font-size: 2rem;" aria-hidden="true">🧮</div>
      </div>

      <p class="tool-subtitle">
        Estimate standard adult daily volumetric intake (fluid ounces &amp; milliliters) of certified decolorized aloe vera juice based on body weight and personal dietary goals. This tool does not provide medical diagnoses or prescriptions.
      </p>

      <div class="tool-grid-2">
        <div>
          <label for="calc-weight" class="tool-label">Body Weight (lbs / kg)</label>
          <div style="display: flex; gap: 0.5rem;">
            <input id="calc-weight" type="number" value="150" min="80" max="350" class="tool-input" style="font-family: ui-monospace, monospace; font-weight: 700;" />
            <select id="calc-unit" aria-label="Weight unit" class="tool-select" style="width: auto; min-width: 76px;">
              <option value="lbs">lbs</option>
              <option value="kg">kg</option>
            </select>
          </div>
        </div>

        <div>
          <label for="calc-goal" class="tool-label">Personal Dietary Focus</label>
          <select id="calc-goal" class="tool-select">
            <option value="wellness">General Botanical Dietary Hydration</option>
            <option value="reflux">Esophageal &amp; Stomach Mucosal Soothing</option>
            <option value="digestion">Colon &amp; Gut Microbiome Fiber Support</option>
          </select>
        </div>
      </div>

      <div class="tool-panel">
        <div class="tool-grid-3">
          <div>
            <div class="tool-label" style="color: #34d399;">Standard Daily Range</div>
            <div id="calc-rec-oz" style="font-size: 2rem; font-weight: 800; color: #6ee7b7; line-height: 1.15;">2.0 oz</div>
            <div id="calc-rec-ml" style="font-size: 0.8rem; color: #a7f3d0; font-family: ui-monospace, monospace; margin-top: 0.25rem;">~60 ml / day</div>
          </div>
          <div>
            <div class="tool-label" style="color: #fbbf24;">Prudent Upper Bound</div>
            <div id="calc-max-oz" style="font-size: 2rem; font-weight: 800; color: #fcd34d; line-height: 1.15;">4.0 oz</div>
            <div id="calc-max-ml" style="font-size: 0.8rem; color: #fde68a; font-family: ui-monospace, monospace; margin-top: 0.25rem;">~120 ml / day</div>
          </div>
          <div>
            <div class="tool-label" style="color: #5eead4;">Intake Schedule</div>
            <div id="calc-timing" style="font-size: 0.92rem; font-weight: 600; color: #ccfbf1; margin-top: 0.5rem;">20 min before breakfast</div>
          </div>
        </div>
      </div>

      <div class="tool-notice">
        <strong style="color: #fde68a;">Important Safety Notice:</strong> Volumetric estimates are compiled from published botanical literature for educational review. Individuals who are pregnant, nursing, or managing diabetes or renal conditions should consult their attending physician prior to consuming aloe vera juice.
      </div>
    </div>

    <script>
      (function() {
        var weightInput = document.getElementById('calc-weight');
        var unitSelect = document.getElementById('calc-unit');
        var goalSelect = document.getElementById('calc-goal');
        var recOz = document.getElementById('calc-rec-oz');
        var recMl = document.getElementById('calc-rec-ml');
        var maxOz = document.getElementById('calc-max-oz');
        var maxMl = document.getElementById('calc-max-ml');
        var timingEl = document.getElementById('calc-timing');

        function calculate() {
          var weight = parseFloat(weightInput.value) || 150;
          if (unitSelect.value === 'kg') {
            weight = weight * 2.20462;
          }

          var goal = goalSelect.value;
          var baseOz = 2.0;
          var ceilingOz = 4.0;
          var timingText = '20 min before morning meal';

          if (weight > 200) {
            baseOz = 2.5;
            ceilingOz = 5.0;
          } else if (weight < 120) {
            baseOz = 1.5;
            ceilingOz = 3.0;
          }

          if (goal === 'reflux') {
            baseOz = parseFloat((baseOz * 1.25).toFixed(1));
            timingText = 'Split: half morning, half before evening meal';
          } else if (goal === 'digestion') {
            timingText = 'Morning with warm filtered water';
          }

          recOz.textContent = baseOz.toFixed(1) + ' oz';
          recMl.textContent = '~' + Math.round(baseOz * 29.5735) + ' ml / day';
          maxOz.textContent = ceilingOz.toFixed(1) + ' oz';
          maxMl.textContent = '~' + Math.round(ceilingOz * 29.5735) + ' ml / day';
          timingEl.textContent = timingText;
        }

        weightInput.addEventListener('input', calculate);
        unitSelect.addEventListener('change', calculate);
        goalSelect.addEventListener('change', calculate);
        calculate();
      })();
    </script>
  `;
}
