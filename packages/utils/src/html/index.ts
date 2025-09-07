export function htmlTemplate(data: { testRun: any, results: any[] }) {
    const base64 = Buffer.from(JSON.stringify(data)).toString('base64');

    return `
        <!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Test Run Report</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg1: #0f0720;
            --bg2: #19082a;
            --panel: rgba(255, 255, 255, 0.04);
            --muted: rgba(255, 255, 255, 0.35);
            --accent: #00f0c6;
            --glass: rgba(255, 255, 255, 0.03);
            --card-shadow: 0 8px 30px rgba(6, 3, 10, 0.6);
            font-family: 'Inter', system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
        }

        html,
        body {
            height: max-content;
            background: radial-gradient(ellipse at bottom right, #220a3a 0%, #0b0620 40%, #000000 100%);
            margin: 0;
            color: #e6e6f0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            padding: 40px;
            box-sizing: border-box;
        }

        .container {
            max-width: 1080px;
            margin: 0 auto;
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.01));
            border-radius: 12px;
            padding: 28px;
            display: grid;
            grid-template-columns: 1fr 320px;
            gap: 20px;
            box-shadow: var(--card-shadow);
            align-items: start;
            overflow: hidden;
        }

        .left {
            padding-right: 20px;
            border-right: 1px solid rgba(255, 255, 255, 0.04);
        }

        .title {
            font-size: 28px;
            font-weight: 700;
            margin: 0 0 6px 0;
        }

        .sub {
            color: var(--muted);
            font-weight: 400;
            margin-bottom: 18px;
        }

        .progress-bar {
            height: 8px;
            width: 220px;
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.04);
            overflow: hidden;
            margin-bottom: 20px;
            display: flex;
            gap: 0;
        }

        .progress-bar>i {
            display: block;
            height: 100%;
        }

        .p1 {
            background: linear-gradient(90deg, #14d3b4, #00f0c6);
        }

        .p2 {
            background: #ff3b5c;
        }

        .p3 {
            background: #ff57d3;
        }

        .table-header {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 10px;
            margin-bottom: 10px;
            color: var(--muted);
            font-weight: 600;
            font-size: 13px;
        }

        .header-status {
            width: 92px;
        }

        .header-title {
            flex: 1;
        }

        .header-browser {
            width: 80px;
        }

        .header-duration {
            width: 110px;
            text-align: right;
        }

        .table {
            width: 100%;
            margin-top: 6px;
            border-spacing: 0 10px;
        }

        .row {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 10px;
            border-radius: 8px;
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0.005));
            box-shadow: 0 1px 0 rgba(255, 255, 255, 0.02) inset;
        }

        .row+.row {
            margin-top: 10px;
        }

        .clickable-row {
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .clickable-row:hover {
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.03));
            transform: translateY(-1px);
        }

        .check {
            width: 18px;
            height: 18px;
            border-radius: 4px;
            border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .title-col {
            flex: 1;
        }

        .title-col .row-title {
            font-weight: 600;
            font-size: 14px;
            color: #f2f2ff;
        }

        .duration {
            width: 110px;
            text-align: right;
            color: rgba(255, 255, 255, 0.65);
            font-size: 13px;
        }

        .badge {
            padding: 6px 10px;
            border-radius: 8px;
            font-weight: 700;
            font-size: 12px;
            color: #091017;
            min-width: 72px;
            text-align: center;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);
        }

        .passed {
            background: #00d4a3;
            color: #022;
        }

        .failed {
            background: #ff3b5c;
            color: #fff;
        }


        .skipped {
            background: #ff57d3;
            color: #fff;
        }

        /* Browser Badge Styles */
        .browser-badge {
            padding: 4px 8px;
            border-radius: 6px;
            font-weight: 600;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            min-width: 60px;
            text-align: center;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }

        .browser-chromium {
            background: linear-gradient(135deg, #4285f4, #1a73e8);
            color: #ffffff;
        }

        .browser-chrome {
            background: linear-gradient(135deg, #4285f4, #1a73e8);
            color: #ffffff;
        }

        .browser-firefox {
            background: linear-gradient(135deg, #ff9500, #ff6611);
            color: #ffffff;
        }

        .browser-webkit {
            background: linear-gradient(135deg, #00d4aa, #00a085);
            color: #ffffff;
        }

        .browser-safari {
            background: linear-gradient(135deg, #00d4aa, #00a085);
            color: #ffffff;
        }

        .browser-electron {
            background: linear-gradient(135deg, #47848f, #2f5f66);
            color: #ffffff;
        }

        .browser-default {
            background: linear-gradient(135deg, #6c757d, #495057);
            color: #ffffff;
        }

        .right {
            padding-left: 22px;
        }

        .chart-panel {
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.01));
            padding: 16px;
            border-radius: 12px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            align-items: center;
            justify-content: center;
            position: relative;
        }

        .meta {
            font-size: 13px;
            color: rgba(255, 255, 255, 0.75);
            line-height: 1.9;
            width: 100%;
        }

        .meta .label {
            color: var(--muted);
            font-weight: 600;
            display: block;
            margin-bottom: 6px;
        }

        .meta .value {
            font-weight: 700;
            color: #fff;
            margin-bottom: 6px;
        }

        .chart-wrap {
            width: 160px;
            height: 160px;
            position: relative;
        }

        canvas {
            width: 160px !important;
            height: 160px !important;
            display: block;
        }

        /* Detail View Styles */
        .detail-view {
            padding: 20px 0;
        }

        .detail-header {
            margin-bottom: 24px;
        }

        .back-btn {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: #ffffff;
            padding: 8px 16px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 14px;
            margin-bottom: 16px;
            transition: all 0.2s ease;
        }

        .back-btn:hover {
            background: rgba(255, 255, 255, 0.15);
        }

        .detail-title {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 12px;
        }

        .detail-title h3 {
            margin: 0;
            color: #ffffff;
            font-size: 18px;
            font-weight: 600;
        }

        .detail-meta {
            display: flex;
            gap: 20px;
            color: var(--muted);
            font-size: 14px;
        }

        .error-section, .steps-section, .attachments-section {
            margin: 24px 0;
            padding: 16px;
            background: rgba(255, 255, 255, 0.02);
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .error-section h4, .steps-section h4, .attachments-section h4 {
            margin: 0 0 12px 0;
            color: #ffffff;
            font-size: 16px;
            font-weight: 600;
        }

        .error-message {
            background: rgba(255, 59, 92, 0.1);
            border: 1px solid rgba(255, 59, 92, 0.3);
            padding: 12px;
            border-radius: 6px;
            color: #ff6b8a;
            font-family: 'Courier New', monospace;
            font-size: 13px;
            white-space: pre-wrap;
            overflow-x: auto;
        }

        .step-item {
            margin: 12px 0;
            padding: 12px;
            background: rgba(255, 255, 255, 0.02);
            border-radius: 6px;
            border-left: 3px solid transparent;
        }

        .step-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 6px;
        }

        .step-status {
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
        }

        .step-status.passed {
            background: #00d4a3;
            color: #022;
        }

        .step-status.failed {
            background: #ff3b5c;
            color: #fff;
        }

        .step-title {
            flex: 1;
            color: #ffffff;
            font-weight: 500;
        }

        .step-duration {
            color: var(--muted);
            font-size: 12px;
        }

        .step-category {
            color: var(--muted);
            font-size: 12px;
            margin-bottom: 4px;
        }

        .step-error {
            background: rgba(255, 59, 92, 0.1);
            border: 1px solid rgba(255, 59, 92, 0.3);
            padding: 8px;
            border-radius: 4px;
            color: #ff6b8a;
            font-family: 'Courier New', monospace;
            font-size: 12px;
            margin-top: 6px;
            white-space: pre-wrap;
        }

        .attachments-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
        }

        .attachment-item {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            padding: 12px;
            text-align: center;
        }

        .image-preview img {
            max-width: 100%;
            max-height: 200px;
            border-radius: 4px;
            object-fit: contain;
            background: rgba(0, 0, 0, 0.1);
        }

        .video-preview video {
            max-width: 100%;
            max-height: 200px;
            border-radius: 4px;
            background: rgba(0, 0, 0, 0.1);
        }

        .file-attachment {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
        }

        .file-icon {
            font-size: 32px;
        }

        .attachment-name {
            color: #ffffff;
            font-size: 12px;
            margin-top: 8px;
            word-break: break-word;
        }

        @media (max-width: 860px) {
            .container {
                grid-template-columns: 1fr;
            }

            .right {
                padding-left: 0;
                margin-top: 14px;
            }

            .attachments-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>

<body>
    <div class="container" id="app" v-scope="ui" style="opacity: 0;" :style="{opacity: loaded ? 1 : 0}">
        <div class="left" @vue:mounted="created">
            <div class="title">{{ title }}</div>
            <div class="sub">{{ usFirst(description) }}</div>

            <div class="progress-bar" aria-hidden="true">
                <i class="p1" :style="{width: progressBarData.passed + '%'}"></i>
                <i class="p2" :style="{width: progressBarData.failed + '%'}"></i>
                <i class="p3" :style="{width: progressBarData.skipped + '%'}"></i>
            </div>

            <div>
                <div v-if="currentView === 'list'">
                     <div class="table-header">
                         <div class="header-status">Status</div>
                         <div class="header-title">Title</div>
                         <div class="header-browser">Browser</div>
                         <div class="header-duration">Duration</div>
                     </div>
                     <div class="table">
                         <template v-for="(it, idx) in items" :key="it.id">
                             <div class="row clickable-row" :style="{opacity: it.hidden?0.45:1}" @click="showTestDetail(it)">
                                 <div style="width:92px">
                                     <div :class="['badge', badgeClass(it.status)]">{{ it.status.toUpperCase() }}</div>
                                 </div>
                                 <div class="title-col">
                                     <div class="row-title">{{ it.title }}</div>
                                 </div>
                                 <div style="width:80px">
                                     <div :class="['browser-badge', getBrowserClass(it.browser)]">{{ getBrowserName(it.browser) }}</div>
                                 </div>
                                 <div class="duration">{{ formatTestDuration(it.duration) }}</div>
                             </div>
                         </template>
                     </div>
                </div>
                <div v-if="currentView === 'detail' && selectedTest">
                    <div class="detail-view">
                        <div class="detail-header">
                            <button class="back-btn" @click="backToList">Back to List</button>
                            <div class="detail-title">
                                <div :class="['badge', badgeClass(selectedTest.status)]">{{ selectedTest.status.toUpperCase() }}</div>
                                <h3>{{ selectedTest.title }}</h3>
                            </div>
                            <div class="detail-meta">
                                <span>Duration: {{ formatTestDuration(selectedTest.duration) }}</span>
                                <span v-if="selectedTest.caseId">Case ID: {{ selectedTest.caseId }}</span>
                            </div>
                        </div>

                        <!-- Error Section -->
                        <div class="error-section" v-if="selectedTest.error">
                            <h4>Error Details</h4>
                            <div class="error-message">{{ stripAnsiCodes(selectedTest.error.message) }}</div>
                        </div>

                        <!-- Steps Section -->
                        <div class="steps-section" v-if="selectedTest.steps && selectedTest.steps.length > 0">
                            <h4>Test Steps</h4>
                            <div class="steps-list">
                                <div :class="['step-item', step.status]" v-for="(step, index) in selectedTest.steps" :key="index">
                                    <div class="step-header">
                                        <span :class="['step-status', step.status]">{{ step.status.toUpperCase() }}</span>
                                        <span class="step-title">{{ step.title }}</span>
                                        <span class="step-duration">{{ formatTestDuration(step.duration) }}</span>
                                    </div>
                                    <div class="step-error" v-if="step.error">{{ stripAnsiCodes(step.error.message) }}</div>
                                </div>
                            </div>
                        </div>

                         <!-- Attachments Section -->
                         <div class="attachments-section" v-if="selectedTest.attachments && selectedTest.attachments.length > 0">
                             <h4>Attachments</h4>
                             <div class="attachments-grid">
                                 <div class="attachment-item" v-for="(attachment, index) in selectedTest.attachments" :key="index">
                                     <div v-if="isImage(attachment.type)" class="image-preview">
                                         <img :src="attachment.path" :alt="attachment.name" loading="lazy" />
                                         <span class="attachment-name">{{ attachment.name }}</span>
                                     </div>
                                     <div v-else-if="isVideo(attachment.type)" class="video-preview">
                                         <video :src="attachment.path" controls :autoplay="false" preload="metadata">
                                             Your browser does not support the video tag.
                                         </video>
                                         <span class="attachment-name">{{ attachment.name }}</span>
                                     </div>
                                     <div v-else class="file-attachment" @click="openFile(attachment.path)">
                                         <span class="file-icon">📄</span>
                                         <span class="attachment-name">{{ attachment.type }}</span>
                                     </div>
                                 </div>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="right">
            <div class="chart-panel">
                <div class="chart-wrap">
                    <canvas id="doughnut"></canvas>
                </div>

                <div class="meta">
                    <div>
                        <span class="label">Test Runner</span>
                        <div class="value">{{ usFirst(meta.testRunner) }}</div>
                    </div>

                    <div>
                        <span class="label">Started on</span>
                        <div class="value">{{ meta.startedOn }}</div>
                    </div>

                    <div>
                        <span class="label">Duration</span>
                        <div class="value">{{ meta.duration }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://unpkg.com/petite-vue" defer init></script>

    <script>
        const TEST_RUN = JSON.parse(atob('${base64}'));
    </script>

    <script>
        function formatDuration(ms) {
            if (!ms) return '0ms';
            const seconds = Math.floor(ms / 1000);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);

            if (hours > 0) {
                const remainingMinutes = minutes % 60;
                const remainingSeconds = seconds % 60;
                return \`\${hours}h \${remainingMinutes}m \${remainingSeconds}s\`;
            } else if (minutes > 0) {
                const remainingSeconds = seconds % 60;
                return \`\${minutes}m \${remainingSeconds}s\`;
            } else if (seconds > 0) {
                return \`\${seconds}s\`;
            } else {
                return \`\${ms}ms\`;
            }
        }

        function formatDateTime(isoString) {
            if (!isoString) return '';
            const date = new Date(isoString);
            return date.toLocaleString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        }

        function usFirst(str){
            return str.charAt(0).toUpperCase() + str.slice(1);
        }

        function stripAnsiCodes(text) {
            return text.replace(/\u001b\[[0-9;]+m/g, '');
        }

         const ui = {
             currentView: 'list',
             selectedTest: null,
             loaded: false,
             get testRun() { return TEST_RUN.testRun; },
             get items() { return TEST_RUN.results; },
             get title() {
                 return \`Test Run #\${this.testRun.id || 'Unknown'}\`;
             },
             get description() {
                 return this.testRun.testRunner ? \`\${this.testRun.testRunner.name} v\${this.testRun.testRunner.version}\` : 'Unknown';
             },
            get meta() {
                return {
                    testRunner: this.testRun.testRunner ? \`\${this.testRun.testRunner.name} v\${this.testRun.testRunner.version}\` : 'Unknown',
                    startedOn: formatDateTime(this.testRun.startTime),
                    duration: formatDuration(this.testRun.duration)
                };
            },
            get statusCounts() {
                const counts = { passed: 0, failed: 0, skipped: 0 };
                this.items.forEach(test => {
                    const status = this.badgeClass(test.status);
                    counts[status]++;
                });
                return counts;
            },
            get progressBarData() {
                const counts = this.statusCounts;
                const total = this.items.length;
                
                if (total === 0) return { passed: 0, failed: 0, skipped: 0 };

                return {
                    passed: (counts.passed / total) * 100,
                    failed: (counts.failed / total) * 100,
                    skipped: (counts.skipped / total) * 100
                };
            },
            badgeClass(status) {
                const s = ('' + status).toLowerCase();
                if (s.includes('pass')) return 'passed';
                if (s.includes('fail')) return 'failed';
                if (s.includes('skip')) return 'skipped';
                return 'passed';
            },
             formatTestDuration(duration) {
                 return formatDuration(duration);
             },
             usFirst,
             stripAnsiCodes,
             showTestDetail(test) {
                 this.selectedTest = test;
                 this.currentView = 'detail';
             },
             backToList() {
                 this.currentView = 'list';
                 this.selectedTest = null;
             },
             isImage(type) {
                return type === 'image';
             },
             isVideo(type) {
                return type === 'video';
             },
             openFile(path) {
                window.open(path, '_blank');
             },
             getBrowserName(browser) {
                 if (!browser || !browser.name) return 'Unknown';
                 const name = browser.name.toLowerCase();
                 
                 const browserMap = {
                     'chrome': 'Chrome',
                     'chromium': 'Chromium', 
                     'firefox': 'Firefox',
                     'webkit': 'WebKit',
                     'safari': 'Safari',
                     'electron': 'Electron'
                 };

                 return browserMap[name] || usFirst(name);
             },
             getBrowserClass(browser) {
                 if (!browser || !browser.name) return 'browser-default';
                 const name = browser.name.toLowerCase();
                 
                 const classMap = {
                     'chrome': 'browser-chrome',
                     'chromium': 'browser-chromium',
                     'firefox': 'browser-firefox', 
                     'webkit': 'browser-webkit',
                     'safari': 'browser-safari',
                     'electron': 'browser-electron'
                 };
                 return classMap[name] || 'browser-default';
             },
             created() {
                setTimeout(() => {
                    this.loaded = true;
                }, 1000);
             }
         };

         window.ui = ui;

        document.addEventListener('DOMContentLoaded', () => {
            if (typeof Chart === 'undefined') return;

            const ctx = document.getElementById('doughnut').getContext('2d');

            const counts = ui.statusCounts;
            const total = ui.testRun.totalTests;
            const completedTests = total - counts.skipped;
            const coveragePercent = total > 0 ? Math.round((completedTests / total) * 100) : 0;

            const gradient = ctx.createLinearGradient(0, 0, 160, 0);
            gradient.addColorStop(0, '#ff2f82');
            gradient.addColorStop(0.25, '#ffcc33');
            gradient.addColorStop(0.5, '#14d3b4');
            gradient.addColorStop(0.75, '#7a4bff');
            gradient.addColorStop(1, '#ff2f82');

            const centerTextPlugin = {
                id: 'centerText',
                beforeDraw(chart) {
                    const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
                    ctx.save();
                    const centerX = (left + right) / 2;
                    const centerY = (top + bottom) / 2;
                    ctx.font = '700 20px Inter, system-ui';
                    ctx.fillStyle = '#ffffff';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(coveragePercent + '%', centerX, centerY - 6);
                    ctx.font = '400 11px Inter, system-ui';
                    ctx.fillStyle = 'rgba(255,255,255,0.65)';
                    ctx.fillText('coverage', centerX, centerY + 16);
                    ctx.restore();
                }
            };

            const myDoughnut = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['passed', 'failed', 'skipped'],
                    datasets: [{
                        data: [counts.passed, counts.failed, counts.skipped],
                        backgroundColor: [
                            '#00d4a3',
                            '#ff3b5c',
                            '#ff57d3'
                        ],
                        hoverOffset: 6,
                        borderWidth: 6,
                        borderColor: 'rgba(0,0,0,0.12)',
                        cutout: '70%'
                    }]
                },
                options: {
                    responsive: false,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            enabled: true,
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            titleColor: '#ffffff',
                            bodyColor: '#ffffff',
                            borderColor: 'rgba(255, 255, 255, 0.1)',
                            borderWidth: 1,
                            cornerRadius: 8,
                            displayColors: true,
                            callbacks: {
                                title: function (context) {
                                    return context[0].label;
                                },
                                label: function (context) {
                                    const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                    const percentage = total > 0 ? Math.round((context.parsed / total) * 100) : 0;
                                    return \`\${context.parsed} tests (\${percentage}%)\`;
                                }
                            }
                        }
                    }
                },
                plugins: [centerTextPlugin]
            });
        });
    </script>
</body>

</html>
    `;
}