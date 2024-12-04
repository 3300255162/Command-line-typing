const commandCategories = {
    linux_basic: [
        { cmd: 'ls -la', desc: '显示当前目录下的所有文件（包括隐藏文件）的详细信息' },
        { cmd: 'cd Documents', desc: '切换到Documents目录' },
        { cmd: 'pwd', desc: '显示当前工作目录的完整路径' },
        { cmd: 'mkdir new-project', desc: '创建一个名为new-project的新目录' },
        { cmd: 'rm -rf temp/', desc: '强制递归删除temp目录及其所有内容' },
        { cmd: 'cp file1.txt file2.txt', desc: '将file1.txt复制为file2.txt' },
        { cmd: 'mv old.txt new.txt', desc: '将old.txt重命名为new.txt' },
        { cmd: 'touch example.txt', desc: '创建一个名为example.txt的空文件' },
        { cmd: 'cat config.json', desc: '显示config.json文件的内容' },
        { cmd: 'chmod 755 script.sh', desc: '设置script.sh的权限为755' },
        { cmd: 'chown user:group file.txt', desc: '更改file.txt的所有者和组' }
    ],
    linux_advanced: [
        { cmd: 'find . -name "*.js"', desc: '在当前目录及子目录中查找所有.js文件' },
        { cmd: 'grep "error" log.txt', desc: '在log.txt中搜索"error"' },
        { cmd: 'sed -i "s/old/new/g" file.txt', desc: '将文件中的old替换为new' },
        { cmd: 'awk "{print $1}" file.txt', desc: '打印文件每行的第一个字段' },
        { cmd: 'ln -s target link_name', desc: '创建软链接' },
        { cmd: 'head -n 10 file.txt', desc: '显示文件前10行' },
        { cmd: 'tail -f log.txt', desc: '实时查看日志文件更新' },
        { cmd: 'tree', desc: '以树形结构显示目录内容' },
        { cmd: 'file filename', desc: '查看文件类型' },
        { cmd: 'stat file.txt', desc: '显示文件详细信息' }
    ],
    powershell: [
        { cmd: 'Get-ChildItem', desc: '列出目录内容（相当于ls）' },
        { cmd: 'Set-Location path', desc: '更改当前目录（相当于cd）' },
        { cmd: 'New-Item -ItemType Directory folder', desc: '创建新目录' },
        { cmd: 'Remove-Item file.txt', desc: '删除文件' },
        { cmd: 'Copy-Item source.txt destination.txt', desc: '复制文件' },
        { cmd: 'Move-Item old.txt new.txt', desc: '移动或重命名文件' },
        { cmd: 'Get-Content file.txt', desc: '显示文件内容' },
        { cmd: 'Write-Output "Hello"', desc: '输出文本' },
        { cmd: 'Get-Process', desc: '列出运行中的进程' },
        { cmd: 'Start-Process program.exe', desc: '启动程序' }
    ],
    git: [
        { cmd: 'git init', desc: '初始化一个新的Git仓库' },
        { cmd: 'git clone url', desc: '克隆远程仓库' },
        { cmd: 'git status', desc: '显示工作区和暂存区的状态' },
        { cmd: 'git add .', desc: '将所有更改添加到暂存区' },
        { cmd: 'git commit -m "message"', desc: '提交暂存的更改' },
        { cmd: 'git push origin main', desc: '推送到远程仓库' },
        { cmd: 'git pull origin main', desc: '从远程仓库拉取更新' },
        { cmd: 'git branch', desc: '列出所有分支' },
        { cmd: 'git checkout -b feature', desc: '创建并切换到新分支' },
        { cmd: 'git merge develop', desc: '合并分支' }
    ],
    git_advanced: [
        { cmd: 'git rebase -i HEAD~3', desc: '交互式变基最近三个提交' },
        { cmd: 'git cherry-pick commit_hash', desc: '将指定提交应用到当前分支' },
        { cmd: 'git reset --hard HEAD^', desc: '回退到上一个提交' },
        { cmd: 'git stash', desc: '暂存工作目录的更改' },
        { cmd: 'git fetch --all', desc: '获取所有远程分支更新' },
        { cmd: 'git clean -fd', desc: '删除未跟踪的文件和目录' },
        { cmd: 'git log --graph --oneline', desc: '以图形方式显示提交历史' },
        { cmd: 'git remote add origin url', desc: '添加远程仓库' },
        { cmd: 'git tag v1.0.0', desc: '创建标签' },
        { cmd: 'git bisect start', desc: '开始二分查找问题提交' }
    ],
    docker: [
        { cmd: 'docker ps', desc: '列出运行中的容器' },
        { cmd: 'docker images', desc: '列出本地的Docker镜像' },
        { cmd: 'docker build -t myapp .', desc: '构建Docker镜像' },
        { cmd: 'docker run -d nginx', desc: '后台运行容器' },
        { cmd: 'docker exec -it container bash', desc: '进入容器终端' },
        { cmd: 'docker-compose up -d', desc: '启动docker-compose服务' },
        { cmd: 'docker logs container_name', desc: '查看容器日志' },
        { cmd: 'docker stop container', desc: '停止容器' },
        { cmd: 'docker rm container', desc: '删除容器' },
        { cmd: 'docker rmi image', desc: '删除镜像' }
    ],
    nodejs: [
        { cmd: 'node app.js', desc: '运行Node.js应用' },
        { cmd: 'npm init', desc: '初始化新的npm项目' },
        { cmd: 'npm install package', desc: '安装包' },
        { cmd: 'npm start', desc: '运行start脚本' },
        { cmd: 'npm run build', desc: '运行build脚本' },
        { cmd: 'npm test', desc: '运行测试' },
        { cmd: 'npm update', desc: '更新所���包' },
        { cmd: 'npm audit fix', desc: '修复安全漏洞' },
        { cmd: 'npx create-react-app myapp', desc: '创建React应用' },
        { cmd: 'yarn add package', desc: '使用yarn安装包' }
    ],
    system_monitor: [
        { cmd: 'top', desc: '实时显示系统进程' },
        { cmd: 'htop', desc: '交互式进程查看器' },
        { cmd: 'ps aux', desc: '显示所有进程' },
        { cmd: 'free -h', desc: '显示内存使用情况' },
        { cmd: 'df -h', desc: '显示磁盘使用情况' },
        { cmd: 'du -sh *', desc: '显示目录大小' },
        { cmd: 'netstat -tulpn', desc: '显示网络连接' },
        { cmd: 'lsof -i :8080', desc: '查看端口占用' },
        { cmd: 'vmstat 1', desc: '显示系统资源统计' },
        { cmd: 'dmesg | tail', desc: '查看系统日志' }
    ],
    network: [
        { cmd: 'ping google.com', desc: '测试网络连接' },
        { cmd: 'curl http://api.example.com', desc: '发送HTTP请求' },
        { cmd: 'wget https://example.com/file', desc: '下载文件' },
        { cmd: 'ssh user@server', desc: 'SSH连接服务器' },
        { cmd: 'scp file.txt user@server:/path', desc: '复制文件到服务器' },
        { cmd: 'nc -zv host port', desc: '测试端口连通性' },
        { cmd: 'dig domain', desc: '查询DNS信息' },
        { cmd: 'traceroute github.com', desc: '跟踪网络路由' },
        { cmd: 'ifconfig', desc: '显示网络接口信息' },
        { cmd: 'iptables -L', desc: '查看防火墙规则' }
    ]
};

// 更新类别名称映射
const categoryNameMap = {
    'linux_basic': 'Linux 基础命令',
    'linux_advanced': 'Linux 高级命令',
    'powershell': 'PowerShell',
    'git': 'Git 基础',
    'git_advanced': 'Git 高级',
    'docker': 'Docker',
    'nodejs': 'Node.js',
    'system_monitor': '系统监控',
    'network': '网络工具',
    'all': '所有命令'
};

let currentCategory = 'file';
let currentCommand = '';
let startTime = null;
let mistakes = 0;

function getAllCommands() {
    return Object.values(commandCategories).flat();
}

function getRandomCommand(category) {
    const commands = category === 'all' ? getAllCommands() : commandCategories[category];
    return commands[Math.floor(Math.random() * commands.length)];
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

function initCategoryButtons() {
    const buttons = document.querySelectorAll('.category-btn');
    const categoryNameMap = {
        'file': '文件操��',
        'git': 'Git 命令',
        'system': '系统管理',
        'network': '网络命令',
        'docker': 'Docker',
        'nodejs': 'Node.js',
        'compress': '压缩解压',
        'text': '文本处理',
        'database': '数据库',
        'security': '安全工具',
        'performance': '性能测试',
        'all': '所有命令'
    };

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // 更新当前类别
            currentCategory = button.dataset.category;
            // 更新显示的类别名称
            document.querySelector('.current-category span').textContent = 
                categoryNameMap[currentCategory];
            // 切换到练习页面
            showPage('practicePage');
            // 重置并开始新的练习
            resetPractice();
            // 聚焦输入框
            document.getElementById('commandInput').focus();
        });
    });

    // 返回按钮事件
    document.getElementById('backToCategories').addEventListener('click', () => {
        showPage('categoryPage');
    });
}

function resetPractice() {
    const commandInput = document.getElementById('commandInput');
    const outputText = document.querySelector('.output-text');
    
    currentCommand = getRandomCommand(currentCategory);
    outputText.textContent = `请输入: ${currentCommand.cmd}\n说明: ${currentCommand.desc}`;
    commandInput.value = '';
    startTime = null;
    mistakes = 0;
    
    document.getElementById('wpm').textContent = '0';
    document.getElementById('accuracy').textContent = '100%';
}

function initOverviewModal() {
    const modal = document.getElementById('overviewModal');
    const btn = document.getElementById('showOverviewBtn');
    const span = document.querySelector('.close');
    const categoryTabs = document.querySelector('.category-tabs');
    const commandsList = document.querySelector('.commands-list');

    // 创建类别标签
    const categories = {
        linux_basic: 'Linux 基础命令',
        linux_advanced: 'Linux 高级命令',
        powershell: 'PowerShell',
        git: 'Git 基础',
        git_advanced: 'Git 高级',
        docker: 'Docker',
        nodejs: 'Node.js',
        system_monitor: '系统监控',
        network: '网络工具',
        all: '所有命令'
    };

    // 清空现有标签
    categoryTabs.innerHTML = '';

    // 创建新的标签按钮
    Object.entries(categories).forEach(([key, label]) => {
        const tabBtn = document.createElement('button');
        tabBtn.className = 'tab-btn';
        tabBtn.textContent = label;
        tabBtn.dataset.category = key;
        if (key === 'linux_basic') tabBtn.classList.add('active');
        categoryTabs.appendChild(tabBtn);
    });

    // 显示指定类别的命令
    function showCategoryCommands(category) {
        commandsList.innerHTML = '';
        const commands = category === 'all' ? getAllCommands() : commandCategories[category];
        
        commands.forEach(cmd => {
            const div = document.createElement('div');
            div.className = 'command-item';
            div.innerHTML = `
                <div class="command-text">${cmd.cmd}</div>
                <div class="command-desc">${cmd.desc}</div>
            `;
            commandsList.appendChild(div);
        });

        // 更新命令数量显示
        const commandCount = commands.length;
        const categoryTitle = document.querySelector('.modal-header h2');
        categoryTitle.textContent = `命令总览 - ${categories[category]} (${commandCount}个命令)`;
    }

    // 初始显示Linux基础命令
    showCategoryCommands('linux_basic');

    // 标签切换事件
    categoryTabs.addEventListener('click', (e) => {
        if (e.target.classList.contains('tab-btn')) {
            categoryTabs.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');
            showCategoryCommands(e.target.dataset.category);
        }
    });

    // 打开模态框
    btn.onclick = () => {
        modal.style.display = 'block';
        // 重新显示当前类别的命令
        const activeTab = categoryTabs.querySelector('.tab-btn.active');
        if (activeTab) {
            showCategoryCommands(activeTab.dataset.category);
        }
    };

    // 关闭模态框
    span.onclick = () => {
        modal.style.display = 'none';
    };

    // 点击模态框外部关闭
    window.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    };
}

function init() {
    const commandInput = document.getElementById('commandInput');
    initCategoryButtons();
    initOverviewModal();
    
    // 确保一开始显示类别选择页面
    showPage('categoryPage');
    
    commandInput.addEventListener('input', checkInput);
}

function checkInput(e) {
    if (!startTime) {
        startTime = new Date();
    }
    
    const input = e.target.value;
    const outputText = document.querySelector('.output-text');
    
    if (input === currentCommand.cmd) {
        const endTime = new Date();
        const timeElapsed = (endTime - startTime) / 1000;
        const wpm = Math.round((currentCommand.cmd.length / 5) / (timeElapsed / 60));
        const accuracy = Math.round(((currentCommand.cmd.length - mistakes) / currentCommand.cmd.length) * 100);
        
        document.getElementById('wpm').textContent = wpm;
        document.getElementById('accuracy').textContent = `${accuracy}%`;
        
        outputText.textContent += '\n命令正确！\n';
        e.target.value = '';
        
        setTimeout(() => {
            currentCommand = getRandomCommand(currentCategory);
            outputText.textContent = `请输入: ${currentCommand.cmd}\n说明: ${currentCommand.desc}`;
            startTime = null;
            mistakes = 0;
        }, 1500);
    } else if (!currentCommand.cmd.startsWith(input)) {
        mistakes++;
    }
}

window.addEventListener('load', init); 