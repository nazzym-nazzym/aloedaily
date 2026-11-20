export function renderDosageCalculatorScript(): string {
  return `
    <div class="bg-gradient-to-br from-emerald-900 to-teal-950 text-white rounded-2xl p-6 sm:p-8 my-8 shadow-xl border border-emerald-700/60">
      <div class="flex items-center justify-between border-b border-emerald-700/60 pb-4 mb-6">
        <div>
          <span class="inline-block px-3 py-1 bg-emerald-800 text-emerald-300 text-xs font-semibold rounded-full uppercase tracking-wider mb-1">Educational Botanical Tool</span>
          <h3 class="text-xl sm:text-2xl font-bold text-white">Daily Aloe Vera Juice Intake Estimator</h3>
        </div>
        <div class="text-3xl">🧮</div>
      </div>

      <p class="text-emerald-200 text-sm mb-6">
        Estimate standard adult daily volumetric intake (fluid ounces & milliliters) of certified decolorized aloe vera juice based on body weight and personal dietary goals. This tool does not provide medical diagnoses or prescriptions.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label class="block text-xs uppercase tracking-wider text-emerald-300 font-semibold mb-2">Body Weight (lbs / kg)</label>
          <div class="flex gap-2">
            <input id="calc-weight" type="number" value="150" min="80" max="350" class="w-full bg-emerald-950 border border-emerald-700 rounded-lg px-4 py-2.5 text-white font-mono text-lg focus:outline-none focus:border-emerald-400" />
            <select id="calc-unit" class="bg-emerald-950 border border-emerald-700 rounded-lg px-3 py-2.5 text-emerald-200 text-sm">
              <option value="lbs">lbs</option>
              <option value="kg">kg</option>
            </select>
          </div>
        </div>

        <div>
          <label class="block text-xs uppercase tracking-wider text-emerald-300 font-semibold mb-2">Personal Dietary Focus</label>
          <select id="calc-goal" class="w-full bg-emerald-950 border border-emerald-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-emerald-400">
            <option value="wellness">General Botanical Dietary Hydration</option>
            <option value="reflux">Esophageal & Stomach Mucosal Soothing</option>
            <option value="digestion">Colon & Gut Microbiome Fiber Support</option>
          </select>
        </div>
      </div>

      <div class="bg-emerald-950/80 rounded-xl p-6 border border-emerald-800/80 mb-6">
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
          <div>
            <div class="text-xs uppercase tracking-wider text-emerald-400 font-medium mb-1">Standard Daily Range</div>
            <div id="calc-rec-oz" class="text-3xl sm:text-4xl font-extrabold text-emerald-300">2.0 oz</div>
            <div id="calc-rec-ml" class="text-xs text-emerald-400/80 font-mono mt-1">~60 ml / day</div>
          </div>
          <div>
            <div class="text-xs uppercase tracking-wider text-amber-400 font-medium mb-1">Prudent Upper Bound</div>
            <div id="calc-max-oz" class="text-3xl sm:text-4xl font-extrabold text-amber-300">4.0 oz</div>
            <div id="calc-max-ml" class="text-xs text-amber-400/80 font-mono mt-1">~120 ml / day</div>
          </div>
          <div class="col-span-2 sm:col-span-1">
            <div class="text-xs uppercase tracking-wider text-teal-400 font-medium mb-1">Intake Schedule</div>
            <div id="calc-timing" class="text-sm font-semibold text-teal-200 mt-2">20 min before breakfast</div>
          </div>
        </div>
      </div>

      <div class="bg-amber-950/60 rounded-xl p-4 border border-amber-800/50 text-xs text-amber-200">
        <strong class="font-bold text-amber-300">Important Safety Notice:</strong> Volumetric estimates are compiled from published botanical literature for educational review. Individuals who are pregnant, nursing, or managing diabetes or renal conditions should consult their attending physician prior to consuming aloe vera juice.
      </div>
    </div>

    <script>
      (function() {
        const weightInput = document.getElementById('calc-weight');
        const unitSelect = document.getElementById('calc-unit');
        const goalSelect = document.getElementById('calc-goal');
        const recOz = document.getElementById('calc-rec-oz');
        const recMl = document.getElementById('calc-rec-ml');
        const maxOz = document.getElementById('calc-max-oz');
        const maxMl = document.getElementById('calc-max-ml');
        const timingEl = document.getElementById('calc-timing');

        function calculate() {
          let weight = parseFloat(weightInput.value) || 150;
          if (unitSelect.value === 'kg') {
            weight = weight * 2.20462;
          }

          const goal = goalSelect.value;
          let baseOz = 2.0;
          let ceilingOz = 4.0;
          let timingText = '20 min before morning meal';

          if (weight > 200) {
            baseOz = 2.5;
            ceilingOz = 5.0;
          } else if (weight < 120) {
            baseOz = 1.5;
            ceilingOz = 3.0;
          }

          if (goal === 'reflux') {
            baseOz = (baseOz * 1.25).toFixed(1);
            timingText = 'Split: half morning, half before evening meal';
          } else if (goal === 'digestion') {
            timingText = 'Morning with warm filtered water';
          }

          recOz.textContent = parseFloat(baseOz).toFixed(1) + ' oz';
          recMl.textContent = '~' + Math.round(parseFloat(baseOz) * 29.5735) + ' ml / day';
          maxOz.textContent = parseFloat(ceilingOz).toFixed(1) + ' oz';
          maxMl.textContent = '~' + Math.round(parseFloat(ceilingOz) * 29.5735) + ' ml / day';
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
