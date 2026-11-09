const projects = [
  {
    id: "W03", group: "work", title: "排水管道检测机器人", image: "pipeline.svg",
    summary: "按上位机指令执行管内行走、升降和拍摄相关动作，配合完成巡检。",
    tags: ["系缆控制", "Modbus RTU", "工业相机"],
    status: "已用于正式管检作业",
    role: "负责机器人本体，接收上位机指令执行巡检动作，并适配相关文件。",
    context: "在相邻检查井之间巡检。操作员需要远程控制系缆机器人，并把发现的缺陷关联到可回看的视频位置。",
    steps: [
      ["本体动作与限位", "底盘、升降机构和云台通过系缆接收控制指令，配合补光执行沿程巡检与停驻拍摄。升降限位接到驱动器本地输入。"],
      ["上位机采集与索引", "上位机按时间戳关联视频帧、IMU、轮编码器和放缆计米，支持按井段和里程回看视频。"],
      ["系统缺陷筛查", "缺陷筛查功能通过 ONNX Runtime 运行模型，识别裂缝、沉积物和接缝错口，供操作员复核。"]
    ],
    result: "系统用于正式排水管道检测，缺陷筛查功能用现场采集的数据运行过。"
  },
  {
    id: "W01", group: "work", title: "海钓船用顶流机", image: "boat.svg",
    summary: "船体按上位机指令执行推进和转向，支持稳船驻留、短距移钓与手动接管。",
    tags: ["CAN / RS-485", "推进控制", "转向伺服"],
    status: "近海 3 小时实船测试",
    role: "负责船体侧，接收上位机的推进与转向指令，执行相应功能并适配相关文件。",
    context: "海钓船需要在风浪中维持钓点驻留，同时让船员能随时调整位置或接管。",
    steps: [
      ["本体推进与转向", "推进驱动器和转向伺服按指令执行转速与位置闭环。转向限位和回程停推由本地硬件联锁处理。"],
      ["上位机调度与异常处理", "上位机通过 ROS2 Action 管理稳船任务，经 ros2_control 下发推进转速与目标舵角并读取反馈。定位失效时下发停推指令并退出稳船模式。"],
      ["实船测试记录", "系统用 rosbag2 记录漂移轨迹、电流和舵角跟随误差，供回看持续偏离、推力接近上限或疑似转向卡滞的片段。"]
    ],
    result: "在有风浪的近海完成 3 小时实船稳船驻留测试。"
  },
  {
    id: "W02", group: "work", title: "拉网捕鱼无人船", graphic: "net",
    summary: "船体接收差速推进指令，执行沿弧线布网、降速和停止动作。",
    tags: ["CAN", "差速推进", "张力联锁"],
    status: "已用于实际捕鱼作业",
    role: "负责无人船本体，接收上位机指令执行推进与停止，并适配相关文件。",
    context: "岸端留住网具一端，无人船牵引另一端按预设弧线布网，抵达接应点后由岸端收网。",
    steps: [
      ["本体差速推进与联锁", "左右推进驱动器通过 CAN 接收差速转速指令。驱动器在本地处理指令超时，独立张力联锁接入驱动使能回路。"],
      ["上位机航段管理", "上位机通过 ROS1 actionlib 管理航段、任务反馈和取消。张力升高时任务节点下发降速指令，岸端失联或船体越界时取消牵引。"],
      ["作业数据复查", "系统关联 rosbag 航迹、推进指令、张力曲线和船尾视频，供复查松绳、负载突升或疑似挂网片段。"]
    ],
    result: "系统已用于实际捕鱼作业。"
  },
  {
    id: "S01", group: "school", title: "ROS 自主导航无人机", graphic: "drone",
    summary: "连接 ROS 与飞控，将自主巡航、避障和定点起降从仿真联调推进到实飞。",
    tags: ["ROS1", "MAVROS", "Gazebo"],
    status: "毕业设计 · 实飞验证",
    role: "本科毕业设计，独立开发",
    context: "搭建具备自主定位、规划和飞行任务执行能力的无人机系统。",
    steps: [
      ["搭建飞控与通信", "使用 Pixhawk 4 与 ArduPilot，接入 GNSS 和 IMU，完成飞控校准。通过 MAVROS 传递飞行指令和状态反馈。"],
      ["联调定位与规划", "用 C++ 开发任务控制和传感器处理节点，编写姿态解算与 A* 搜索相关代码。联调 TF，通过 AMCL 定位与 move_base 规划。"],
      ["验证飞行任务", "在 Gazebo 联调控制和导航流程，再开展实飞测试。"]
    ],
    result: "实飞验证自主巡航、避障和定点起降。"
  },
  {
    id: "S02", group: "school", title: "AGV 多传感器融合导航", image: "agv.svg",
    summary: "用 EKF 联调多传感器导航，在实车上完成 200 米连续运输。",
    tags: ["ROS2 Humble", "STM32", "robot_localization"],
    status: "实车连续运输 200 米",
    role: "校园独立开发",
    context: "在 STM32 移动底盘上接入环境感知和运动反馈，完成运输任务中的定位与路径规划。",
    steps: [
      ["接入底盘和传感器", "搭载激光雷达、IMU 和光电编码器，为上层导航提供环境观测和运动反馈。"],
      ["融合与导航联调", "使用 robot_localization 的扩展卡尔曼滤波器进行多传感器融合，联调建图、自主定位和路径规划。"]
    ],
    result: "在实车测试中完成 200 米连续运输。"
  },
  {
    id: "S03", group: "school", title: "ROS2 智能送药小车", graphic: "route",
    summary: "从识别病房号到卸药返程，把配送动作编排成一条任务链。",
    tags: ["ROS2 Humble", "OpenCV", "OCR"],
    status: "模拟医院全流程验证",
    role: "校园独立开发",
    context: "在模拟医院走廊中，识别纸面病房号，完成目标病房的药盒配送。",
    steps: [
      ["识别配送目标", "用 OpenCV 处理数字标号图像，通过 OCR 得到病房号。装载完成后启动配送，沿走廊标识寻径并判断到站。"],
      ["串联装卸与返程", "在 ROS2 中组织装载检测、到站提示和返程。到站后推杆推出药盒，检测到卸载后熄灭红色指示灯并返回药房。"]
    ],
    result: "在模拟医院场景验证出发、到站、卸药和返程。"
  },
  {
    id: "S04", group: "school", title: "植保飞行器全覆盖飞播系统", graphic: "coverage",
    summary: "用网格航线覆盖指定播撒区，将模拟播撒动作与飞行位置联动。",
    tags: ["四旋翼", "覆盖航线", "播撒控制"],
    status: "模拟田块联调",
    role: "校园独立开发",
    context: "在模拟田块中规划植保航线，让飞行器覆盖所有待播撒格区，并在飞越其他格区时关闭播撒。",
    steps: [
      ["划分作业区", "将田块划分为 28 个编号格区，区分待播撒区与非播撒区，为指定格区规划覆盖航线。"],
      ["联动飞行与播撒", "将模拟播撒动作关联到航线，在指定格区触发播撒，飞越非播撒区时关闭。"]
    ],
    result: "在 28 个格区中联调覆盖飞行与模拟播撒，按漏播、重复播撒和误撒三种情况检查作业过程。"
  },
  {
    id: "S05", group: "school", title: "空地协同智能消防系统", graphic: "fire",
    summary: "联调无人机巡逻与地面消防车响应，将模拟火源位置交给车辆执行。",
    tags: ["四旋翼", "巡逻规划", "空地协同"],
    status: "模拟火情协同联调",
    role: "校园独立开发",
    context: "搭建无人机与地面消防车协同原型，在测试场地完成模拟火情发现与地面响应。",
    steps: [
      ["规划空中巡逻", "按任务设定的地面覆盖宽度布置巡逻航线，用下视激光指示无人机航迹。"],
      ["将火源位置交给地面车辆", "无人机发现模拟火情后执行初步处置，并将火源位置发送给地面消防车，由车辆驶向目标执行灭火任务。"]
    ],
    result: "验证从空中发现模拟火情到地面消防车接收位置并到场的流程。"
  },
  {
    id: "S06", group: "school", title: "送货无人机", graphic: "cargo",
    summary: "串联定点悬停、升降吊舱收放和恢复巡航，完成指定地点交付。",
    tags: ["多旋翼", "升降吊舱", "定点悬停"],
    status: "指定地点送货测试",
    role: "校园独立开发",
    context: "设计多旋翼无人机送货流程，通过可升降吊舱在悬停时下放货物。",
    steps: [
      ["集成升降吊舱", "将吊舱安装在机腹，起飞和巡航时收起。飞抵目标点后降低高度并悬停，再下放吊舱。"],
      ["编排交付与回收", "用扬声器播放交付提示，并通过下视激光标示航迹。交付后收回吊舱，恢复巡航高度。"]
    ],
    result: "联调定点悬停、吊舱下放和回收、恢复巡航等动作，完成指定地点送货测试。"
  },
  {
    id: "S07", group: "school", title: "简易自行瞄准装置", graphic: "aim",
    summary: "把双轴云台装到自动寻迹小车上，在行驶中控制激光指向靶面。",
    tags: ["自动寻迹", "双轴云台", "激光指向"],
    status: "行驶中瞄准测试",
    role: "校园独立开发",
    context: "让小车沿地面标记路线行驶，同时通过云台调整激光指向，使光斑投射到目标靶面。",
    steps: [
      ["集成寻迹底盘与云台", "以自动寻迹小车为移动载体，在双轴云台上安装蓝紫激光模块。"],
      ["联调行驶与瞄准", "编排底盘沿线行驶和云台指向动作，在小车移动过程中观察激光在靶面上的连续照射效果。"]
    ],
    result: "在移动小车上进行靶面连续照射与光斑尺寸测试。"
  },
  {
    id: "S08", group: "school", title: "自动泊车电动车", graphic: "parking",
    summary: "用车载传感器联调倒车和侧方泊车，支持单项与连续执行。",
    tags: ["电动车底盘", "车载传感器", "泊车控制"],
    status: "入库与出库实车测试",
    role: "校园独立开发",
    context: "在测试泊车场地，让电动小车根据车载传感器反馈执行两种入库和出库操作。",
    steps: [
      ["实现两种泊车动作", "根据传感器反馈控制车辆转向与行驶，完成倒车入库、侧方入库和对应的出库动作。"],
      ["组织执行顺序", "编排可单独运行的倒车与侧方泊车流程，并将两种流程串联起来连续执行。"]
    ],
    result: "在测试场地验证单项与连续泊车，覆盖倒车和侧方两种入库与出库。"
  },
  {
    id: "S09", group: "school", title: "坡道行驶电动车", graphic: "slope",
    summary: "用车载传感器完成平地及坡道循迹，驶入指定停靠区后停车。",
    tags: ["TI 微控制器", "标记线循迹", "运动控制"],
    status: "平地与坡道实车测试",
    role: "校园独立开发",
    context: "以车载传感器、控制器和电池供电模块搭建自主行驶小车，在平地及坡道上沿标记线行驶。",
    steps: [
      ["接入车载传感器", "由 TI 微控制器读取地面标记线的传感器反馈，并据此调整小车行驶方向。"],
      ["完成指定区域停车", "编排行驶和停车逻辑，小车进入指定停靠区后停止。"]
    ],
    result: "在平地和不同坡度设置下验证循迹行驶及指定区域停车。"
  },
  {
    id: "W04", group: "work", title: "给水管道检测机器人", graphic: "signal",
    summary: "本体通过系缆接收推进指令，配合完成巡航、驻留采样和回收。",
    tags: ["系缆控制", "双路推进", "水听器"],
    status: "现场验证待补",
    role: "负责机器人本体，接收上位机指令执行推进等检测相关功能，并适配相关文件。",
    context: "面向带压给水管段的漏点排查，方案通过系缆接入推进、压力采集和绕线设备。",
    steps: [
      ["本体推进与检测配合", "双路推进驱动器通过系缆接收控制指令，机器人配合巡航、驻留采样与回收。"],
      ["上位机采集与漏点筛查", "系统记录水听器音频、压力、姿态、放缆量和推进速度，结合声谱图与估计里程辅助筛查疑似泄漏。"]
    ],
    result: "现场验证记录待补充。"
  },
  {
    id: "W05", group: "work", title: "风电叶片检测机器人", image: "blade.svg",
    summary: "本体按上位机指令行走、调整拍摄视角和补光，配合分段扫描。",
    tags: ["四轮驱动", "多相机", "Modbus RTU"],
    status: "现场验证待补",
    role: "负责机器人本体，接收上位机指令执行行走和拍摄相关动作，并适配相关文件。",
    context: "围绕叶片表面巡检，联动机器人行走、拍摄视角和补光，记录已拍与待拍区间。",
    steps: [
      ["本体行走与拍摄配合", "四轮驱动与云台按指令执行移动和视角调整，配合五路网络相机和七路补光完成分段扫描。"],
      ["系统影像质检与复拍", "系统归档各扫描区间影像，筛查前缘侵蚀和涂层剥落，标出失焦、过曝或反光帧，生成补拍清单。"]
    ],
    result: "现场验证记录待补充。"
  },
  {
    id: "W06", group: "work", title: "电动吊篮运行监测", graphic: "lift",
    summary: "设备侧配合上位机读取运行数据，告警和制动由本地联锁执行。",
    tags: ["Modbus RTU", "仪表数据采集", "安全继电器"],
    status: "现场验证待补",
    role: "负责设备本体侧，配合上位机读取运行数据，并适配相关文件。",
    context: "运行监测需要保留告警前后的仪表数据，为班组核对制动与传感器状态提供记录。",
    steps: [
      ["设备侧采集与联锁", "设备侧提供载重、倾角和制动反馈。本地限位开关、仪表超限触点与独立安全继电器执行告警和制动联动。"],
      ["上位机监测与班报", "上位机通过只读 Modbus RTU 获取运行数据。系统汇总告警和制动记录，生成带事件编号、曲线和手册条目的班报。"]
    ],
    result: "现场验证记录待补充。"
  }
];

const groups = { work: "在职开发", school: "校园 · 独立项目" };
const diagrams = {
  coverage: `
    <rect x="120" y="56" width="378" height="184" rx="4" fill="#143547" stroke-width="2"/>
    <path d="M120 56h108v46H120Zm54 92h108v46H174Zm108-46h162v46H282Zm108 92h108v46H390Z" fill="#4b9cad" fill-opacity=".28" stroke="none"/>
    <path d="M174 56v184m54-184v184m54-184v184m54-184v184m54-184v184m54-184v184M120 102h378m-378 46h378m-378 46h378" opacity=".53"/>
    <path d="M147 79h310q14 0 14 14v18q0 14-14 14H161q-14 0-14 14v18q0 14 14 14h296q14 0 14 14v18q0 14-14 14H147" stroke="#ff9c77" stroke-width="2.5" stroke-dasharray="7 6"/>
    <g transform="translate(362 125)">
      <path d="m-21-18 42 36m0-36-42 36" stroke="#b4e5e4" stroke-width="4"/>
      <path d="M-9-9H9V9H-9Z" fill="#204d61" stroke="#b4e5e4" stroke-width="2"/>
      <g fill="#143547" stroke-width="2"><circle cx="-21" cy="-18" r="8"/><circle cx="21" cy="-18" r="8"/><circle cx="-21" cy="18" r="8"/><circle cx="21" cy="18" r="8"/></g>
    </g>
    <circle cx="147" cy="79" r="4" fill="#ff9c77" stroke="none"/><path d="m154 211-7 6 7 6" stroke="#ff9c77" stroke-width="2"/>`,
  fire: `
    <path d="M64 237h493M85 221h142m160 0h155" opacity=".45"/>
    <path d="M190 90 127 221h126Z" fill="#73c5cf" fill-opacity=".12" stroke-dasharray="4 6"/>
    <path d="M190 96v112" stroke="#ff9c77" stroke-width="2" stroke-dasharray="4 6"/>
    <g transform="translate(190 80)" stroke-width="2">
      <path d="M-53-8h26m54 0h26m-41 7 25-7m-49 7-25-7M-18 1h36l-5 12h-26Z" fill="#204d61"/>
      <path d="m-10 13-7 7m27-7 7 7m-59-29v-4m84 4v-4" stroke="#b4e5e4"/>
    </g>
    <path d="M235 103q76 0 132 49m-120-60q86-8 152 51" opacity=".55" stroke-dasharray="5 6"/>
    <path d="M367 230H266q-22 0-31-12l-4-5" stroke="#ff9c77" stroke-width="2.5" stroke-dasharray="7 6"/>
    <g transform="translate(393 171)" stroke-width="2.2">
      <path d="M-18 5h65v37h-89V20Z" fill="#204d61"/>
      <path d="M-25 21H-8V9m11 6h31m-31 7h31m-31 7h31m-9-29h7" stroke="#b4e5e4"/>
      <circle cx="-24" cy="43" r="8" fill="#143547"/><circle cx="29" cy="43" r="8" fill="#143547"/>
    </g>
    <path d="M190 221c-11-2-16-14-10-22 0 7 5 6 6 2 2-5 4-11 9-15-1 8 3 10 7 14 9 9 1 21-12 21Z" fill="#ff9c77" fill-opacity=".22" stroke="#ff9c77" stroke-width="2"/>`,
  cargo: `
    <path d="M113 75h394m-374 83h354M155 246h310" opacity=".3" stroke-dasharray="5 7"/>
    <g transform="translate(310 78)" stroke-width="2.5">
      <path d="M-83-5h40m86 0h40m-64 11 44-11m-82 11-44-11M-26 4h52l-8 18h-36Z" fill="#204d61"/>
      <path d="m-16 22-10 12h-12m54-12 10 12h12m-91-40v-5m126 5v-5" stroke="#b4e5e4"/>
    </g>
    <path d="M310 101v78m-24 0 24-15 24 15" stroke="#ff9c77" stroke-width="2"/>
    <path d="M283 180h54v41h-54Z" fill="#204d61" stroke="#b4e5e4" stroke-width="2"/>
    <path d="M303 180h14v16h-14m-16 18h15" stroke-width="1.5"/>
    <path d="M377 116v92m-5-86 5-6 5 6m-10 80 5 6 5-6" stroke="#ff9c77" stroke-width="2" stroke-dasharray="5 4"/>
    <path d="M232 235h156l22 14H210Z" fill="#1b4355" stroke-width="2"/><path d="M296 242h28" stroke="#ff9c77" stroke-width="2"/>`,
  aim: `
    <path d="M61 228q75 0 128-27t146-26" stroke="#ff9c77" stroke-width="2.5" stroke-dasharray="7 6"/>
    <g transform="translate(213 163)" stroke-width="2.5">
      <path d="M-45 3h90v24h-90Z" fill="#204d61"/>
      <circle cx="-28" cy="30" r="11" fill="#143547"/><circle cx="28" cy="30" r="11" fill="#143547"/>
      <path d="M-17 3v-12h34V3m-25-12v-16H8v16"/>
      <path d="m-6-23 36-12 3 9-36 12Z" fill="#204d61" stroke="#b4e5e4"/>
    </g>
    <path d="M245 132 451 102" stroke="#ff9c77" stroke-width="2.5"/>
    <g stroke-width="2"><circle cx="451" cy="102" r="43"/><circle cx="451" cy="102" r="25" opacity=".65"/><circle cx="451" cy="102" r="8" stroke="#ff9c77"/></g>
    <path d="M451 49v16m0 74v16m-53-53h16m74 0h16m-75 44-14 58m58-58 14 58m-79 0h86" opacity=".65"/>`,
  parking: `
    <path d="M90 69h440m-440 87h440M104 156v79h66v-79m13 0v79h66v-79m13 0v79h66v-79m13 0v79h66v-79m13 0v79h66v-79" stroke-width="2"/>
    <path d="M104 235h382m-381-123h409" opacity=".38" stroke-dasharray="7 7"/>
    <path d="M128 113h123q44 0 44 43v45m-7-8 7 8 7-8" stroke="#ff9c77" stroke-width="2.5" stroke-dasharray="6 5"/>
    <path d="M407 113h86q13 0 13 13v2q0 12-13 12h-31m7-7-7 7 7 7" stroke="#ff9c77" stroke-width="2.5" stroke-dasharray="6 5"/>
    <g transform="translate(295 202)" stroke="#b4e5e4" stroke-width="2">
      <rect x="-15" y="-26" width="30" height="52" rx="7" fill="#204d61"/>
      <path d="M-13-11h26m-26 22h26M-8-10v20m16-20v20"/>
    </g>
    <g transform="translate(425 112) rotate(90)" stroke-width="2">
      <rect x="-15" y="-26" width="30" height="52" rx="7" fill="#204d61"/>
      <path d="M-13-11h26m-26 22h26M-8-10v20m16-20v20"/>
    </g>`,
  slope: `
    <path d="M71 224h97L439 85h110v139Z" fill="#143547" stroke-width="2"/>
    <path d="M71 224h478m-319-12 209-107m-159 107 159-81m-106 81 106-54" opacity=".36"/>
    <path d="M111 216h55L437 77h52" stroke="#ff9c77" stroke-width="2.5" stroke-dasharray="7 6"/>
    <path d="M491 67v23m30-23v23m-30-22h30" stroke="#ff9c77" stroke-width="2"/>
    <g transform="translate(310 138) rotate(-27)" stroke-width="2.4">
      <path d="M-42-15h18l10-13h35l10 13h12V0h-85Z" fill="#204d61" stroke="#b4e5e4"/>
      <path d="M-12-23h28l5 8h-39Z"/>
      <circle cx="-23" cy="3" r="9" fill="#143547"/><circle cx="24" cy="3" r="9" fill="#143547"/>
      <path d="m44-12 13-5m-13 10h16m-16 5 13 5" stroke="#ff9c77" stroke-width="1.6"/>
    </g>
    <path d="M168 224h58a58 58 0 0 0-6-27" stroke="#ff9c77" opacity=".8"/>`,
  net: '<path d="M66 231Q190 51 425 71T562 229" stroke="#ff9c77" stroke-width="3" stroke-dasharray="8 7"/><path d="M66 231Q200 125 425 71L383 219Z" fill="#63bdc71b"/><path d="M92 217 394 174m-270 22 278-67m-226 41 238-82m-268 97 53 28m20-68 64 70m0-93 64 95" opacity=".58"/><g transform="translate(425 71) rotate(11)"><path d="M-35 30v-47L0-45 35-17v47Z" fill="#234f61" stroke="#b4e5e4" stroke-width="3"/><path d="M-16 18V-8h32v26ZM-42 22v18m84-18v18" stroke="#b4e5e4" stroke-width="3"/></g><path d="M66 218v26m-13-13h26m483-13v26m-13-13h26" stroke="#ff9c77"/>',
  drone: '<circle cx="310" cy="150" r="103" stroke-dasharray="4 7" opacity=".4"/><path d="M67 210h111l45-24h178l39-24h115" stroke="#ff9c77" stroke-width="2" stroke-dasharray="7 7"/><path d="m230 90 160 120m0-120L230 210" stroke="#b4e5e4" stroke-width="11"/><rect x="274" y="116" width="72" height="68" rx="12" fill="#254b5c" stroke="#b4e5e4" stroke-width="2"/><circle cx="310" cy="150" r="12" fill="#ff9c77" stroke="none"/><g stroke-width="2"><circle cx="230" cy="90" r="35"/><circle cx="390" cy="90" r="35"/><circle cx="230" cy="210" r="35"/><circle cx="390" cy="210" r="35"/><path d="M204 90h52m108 0h52M204 210h52m108 0h52"/></g>',
  route: '<path d="M70 78h480v144H70Zm112 0v48m0 46v50m128-144v48m0 46v50m128-144v48m0 46v50" stroke-width="2"/><path d="M109 149h359l23-22V97" stroke="#ff9c77" stroke-width="3" stroke-dasharray="6 6"/><rect x="248" y="128" width="59" height="43" rx="6" fill="#264e5e" stroke="#b4e5e4" stroke-width="2"/><path d="M260 148h17m-8-8v16m11 22h15m-35 0h14m6-57h15m-35 0h14" stroke="#b4e5e4" stroke-width="3"/><circle cx="491" cy="97" r="10" fill="#ff9c77" stroke="none"/>',
  signal: '<ellipse cx="310" cy="150" rx="236" ry="73" fill="#245060" fill-opacity=".35"/><ellipse cx="310" cy="150" rx="190" ry="54" opacity=".45"/><path d="M81 150h107l15-13 14 26 19-50 20 76 16-48 21 19 18-11 16 3 19-15 19 27 16-28 21 11h128" stroke="#ff9c77" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M140 94v112m340-112v112M310 60v180" stroke-dasharray="4 6" opacity=".55"/>',
  lift: '<path d="M104 55h415M192 56v105m236-105v105m-237-15h238v81H191Z" stroke-width="2"/><path d="M193 172h234m-191 0v55m49-55v55m49-55v55m49-55v55" opacity=".65"/><path d="M151 111h28m262 0h28m-311-14v28m304-28v28" stroke="#ff9c77" stroke-width="2"/><circle cx="192" cy="144" r="6" fill="#ff9c77" stroke="none"/><circle cx="428" cy="144" r="6" fill="#ff9c77" stroke="none"/><path d="M106 252h414" stroke-dasharray="4 6" opacity=".55"/>'
};

const groupTitles = { work: "在职开发", school: "校园独立项目" };
const projectSection = document.querySelector("#projects");
const projectList = document.querySelector("#project-list");
const projectCount = document.querySelector("#project-count");
const searchInput = document.querySelector("#project-search");
const clearSearch = document.querySelector("#clear-project-search");
const dialog = document.querySelector("#case-dialog");
const closeButton = dialog.querySelector(".close");
const copyButton = dialog.querySelector("#copy-case-link");
const shareStatus = dialog.querySelector("#case-share-status");
const shareInput = dialog.querySelector("#case-share-url");
const filterButtons = document.querySelectorAll("[data-filter]");
let selectedGroup = "all";
let caseTrigger;

function caseHash(project) {
  return "#case-" + project.id;
}

function normalizeSearch(text) {
  return text.normalize("NFKC").toLowerCase();
}

const searchableProjects = projects.map(project => ({
  project,
  keywords: normalizeSearch([
    project.id, project.title, project.summary, project.role, project.status,
    project.context, project.result, ...project.tags, ...project.steps.flat()
  ].join(" "))
}));

function artwork(project) {
  if (project.image) {
    return `<img src="art/${project.image}" alt="" width="620" height="300" loading="lazy" decoding="async">`;
  }
  return `<svg width="620" height="300" viewBox="0 0 620 300" aria-hidden="true" focusable="false">
    <defs><pattern id="grid-${project.id}" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0V24" fill="none" stroke="#6997a4" stroke-opacity=".22"/></pattern></defs>
    <rect width="620" height="300" fill="url(#grid-${project.id})"/>
    <path d="M32 47V32h15m526 0h15v15m0 206v15h-15m-526 0H32v-15" stroke="#73abb6" fill="none"/>
    <g fill="none" stroke="#82c6cf" stroke-linecap="round" stroke-linejoin="round">${diagrams[project.graphic]}</g>
  </svg>`;
}

function tagList(project) {
  return `<ul class="tags" aria-label="项目技术栈">${project.tags.map(tag => `<li class="tag">${tag}</li>`).join("")}</ul>`;
}

function projectCard(project) {
  return `
    <article class="project-card">
      <div class="card-art">${artwork(project)}<span>${project.id} / 示意</span></div>
      <div class="card-content">
        <span class="card-kind">${groups[project.group]}</span>
        <h4>${project.title}</h4>
        <p>${project.summary}</p>
        ${tagList(project)}
        <div class="card-bottom">
          <span class="card-proof${project.status === "现场验证待补" ? " is-pending" : ""}"><i></i>${project.status}</span>
          <a class="case-open" href="${caseHash(project)}" data-case="${project.id}" aria-haspopup="dialog" aria-label="查看${project.title}案例">查看案例 <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </article>`;
}

function renderProjects() {
  const terms = normalizeSearch(searchInput.value).match(/\S+/g) || [];
  const matching = searchableProjects
    .filter(({ keywords }) => terms.every(term => keywords.includes(term)))
    .map(({ project }) => project);
  const visible = selectedGroup === "all" ? matching : matching.filter(project => project.group === selectedGroup);
  const visibleGroups = Object.entries(groupTitles).map(([group, title]) => ({
    group, title, entries: visible.filter(project => project.group === group)
  })).filter(({ entries }) => entries.length > 0);

  projectList.innerHTML = visibleGroups.map(({ group, title, entries }) => `
    <section class="project-group" aria-labelledby="group-${group}">
      <h3 class="project-group-title" id="group-${group}">${title} <span>${entries.length} 项</span></h3>
      <div class="project-grid">${entries.map(projectCard).join("")}</div>
    </section>`).join("") || `
      <div class="project-empty">
        <h3>没有找到匹配的案例</h3>
        <p>可以换个关键词，或查看全部项目。</p>
        <button type="button" class="button secondary" data-reset-projects>查看全部项目</button>
      </div>`;
  projectCount.textContent = `共 ${visible.length} 个案例`;
  clearSearch.hidden = !searchInput.value;
  for (const button of filterButtons) {
    button.setAttribute("aria-pressed", String(button.dataset.filter === selectedGroup));
  }
}

function openCase(project) {
  shareStatus.textContent = "";
  if (shareInput) shareInput.hidden = true;
  dialog.querySelector("#case-kicker").textContent = `${project.id} / ${groups[project.group]}`;
  dialog.querySelector("#case-body").innerHTML = `
    <h2 id="case-title">${project.title}</h2>
    <p class="case-lede">${project.context}</p>
    <dl class="case-facts">
      <div><dt>职责与范围</dt><dd>${project.role}</dd></div>
      <div><dt>验证阶段</dt><dd>${project.status}</dd></div>
    </dl>
    <h3>${project.group === "work" ? "本体职责与系统技术要点" : "技术要点"}</h3>
    <ol class="case-steps">${project.steps.map(([title, text]) => `<li><strong>${title}</strong>${text}</li>`).join("")}</ol>
    <h3>验证情况</h3>
    <p class="case-lede">${project.result}</p>
    ${tagList(project)}`;
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
  closeButton.focus();
}

function syncCaseFromLocation() {
  const project = projects.find(entry => caseHash(entry) === window.location.hash);
  if (project) {
    if (!caseTrigger?.isConnected) {
      projectSection.scrollIntoView({ behavior: "instant" });
      caseTrigger = searchInput;
    }
    openCase(project);
  } else if (dialog.open) {
    dialog.close();
  }
}

function dismissCase() {
  dialog.close();
  if (history.state?.portfolioCase) {
    history.back();
  } else {
    history.replaceState(history.state, "", "#projects");
  }
}

function clearProjectSearch() {
  searchInput.value = "";
  renderProjects();
  searchInput.focus();
}

for (const button of filterButtons) {
  const filter = button.dataset.filter;
  const count = filter === "all" ? projects.length : projects.filter(project => project.group === filter).length;
  button.querySelector("span").textContent = String(count).padStart(2, "0");
  button.addEventListener("click", () => {
    if (selectedGroup === filter) return;
    selectedGroup = filter;
    renderProjects();
  });
}

searchInput.addEventListener("input", renderProjects);
clearSearch.addEventListener("click", clearProjectSearch);
projectList.addEventListener("click", event => {
  if (!event.target.closest("[data-reset-projects]")) return;
  selectedGroup = "all";
  clearProjectSearch();
});

document.addEventListener("click", event => {
  const link = event.target.closest('a[href^="#case-"]');
  if (!link || event.defaultPrevented || event.button !== 0 ||
      event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  const project = projects.find(entry => caseHash(entry) === link.hash);
  if (!project) return;
  event.preventDefault();
  caseTrigger = link;
  if (window.location.hash !== link.hash) history.pushState({ portfolioCase: true }, "", link.hash);
  openCase(project);
});

copyButton.addEventListener("click", async () => {
  const link = window.location.href;
  try {
    await navigator.clipboard.writeText(link);
    if (dialog.open && window.location.href === link) shareStatus.textContent = "链接已复制";
  } catch {
    if (!dialog.open || window.location.href !== link) return;
    if (shareInput) {
      shareInput.value = link;
      shareInput.hidden = false;
      shareInput.focus();
      shareInput.select();
      shareStatus.textContent = "请复制已选中的链接";
    } else {
      shareStatus.textContent = "请从地址栏复制案例链接";
    }
  }
});

window.addEventListener("hashchange", syncCaseFromLocation);
closeButton.addEventListener("click", dismissCase);
dialog.addEventListener("cancel", event => {
  event.preventDefault();
  dismissCase();
});
dialog.addEventListener("click", event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dismissCase();
});
dialog.addEventListener("close", () => {
  if (caseTrigger?.isConnected) caseTrigger.focus({ preventScroll: true });
  caseTrigger = undefined;
});

renderProjects();
syncCaseFromLocation();
