(function () {
  const PLAN_SOURCE = { title: "绿色勘查实训室建设方案_完整正式稿（本地只读依据）", internal: true };

  const SOURCES = {
    mineralLaw: {
      title: "中华人民共和国矿产资源法",
      url: "https://www.spp.gov.cn/spp/fl/202411/t20241109_671655.shtml"
    },
    greenNotice: {
      title: "自然资源部、国家林草局绿色勘查通知参考页",
      url: "https://www.hunan.gov.cn/zqt/zcsd/202407/t20240708_33349701.html"
    },
    dztPage: {
      title: "绿色地质勘查工作规范 DZ/T 0374-2021 参考页",
      url: "https://dkj.xizang.gov.cn/zwgk/zcfg/202108/t20210810_254083.html"
    },
    henanOpinion: {
      title: "河南省矿产资源绿色勘查相关意见参考页",
      url: "https://www.hnmining.org.cn/list_45/416.html"
    },
    henanDb: {
      title: "河南省固体矿产绿色勘查技术规范 DB41/T 2082-2020 备案信息",
      url: "https://dbba.sacinfo.org.cn/rnDetail/881f580b5046dec7429da3194e47ba17ceff320a7b132a3746ba830c118798d3"
    },
    henanReview: {
      title: "河南省地方标准集中复审相关材料",
      url: "https://www.hndb41.com/public/ArticleDownload.jsp?FjID=4680"
    },
    henanUnit: {
      title: "河南地质单位实践公开信息",
      url: "https://www.hndzjkczx.cn/Docs/Index/Dept00"
    },
    guizhouStd: {
      title: "贵州省固体矿产绿色勘查技术规范参考 PDF",
      url: "https://zrzy.guizhou.gov.cn/wzgb/zwgk/zfxxgk/fdzdgknr/zcwj/zcjd/202201/W020191203592475811094.pdf"
    },
    ningxiaStd: {
      title: "宁夏绿色勘查技术规程参考下载",
      url: "https://dbba.sacinfo.org.cn/rndownload/02e1a02f0812cb48bde61a8888193885582a2d145c9d9ae6a8522a563cc38b3a"
    },
    qinghaiStd: {
      title: "青海高原绿色勘查规范备案信息",
      url: "https://dbba.sacinfo.org.cn/stdDetail/8066788847b7ad11210d177ceffd550d808156622db98eb69fc44f4316675a1a"
    },
    hunanStd: {
      title: "湖南绿色勘查钻井/地质钻探技术规范备案信息",
      url: "https://ba.sacinfo.org.cn/rnDetail/9898248c938f20c974d5f0875961486ce63638300554ac53e521172f22e2279a"
    },
    anhuiStd: {
      title: "安徽绿色勘查技术规范备案信息",
      url: "https://ba.sacinfo.org.cn/stdDetail/7f6da93cd079202a8104ff1f17a6e26135ee65f5c8827d703056084aeff757ad"
    },
    innerMongoliaStd: {
      title: "内蒙古绿色勘查技术规程备案信息",
      url: "https://dbba.sacinfo.org.cn/stdDetail/920886edb52f863f9d4947fdfc8d1e2f4f66b91529599a96ca0a1c31998076fa"
    },
    liaoningStd: {
      title: "辽宁固体矿产绿色勘查技术规范备案信息",
      url: "https://std.samr.gov.cn/db/search/stdDBDetailed?id=28F9C84058BBFD25E06397BE0A0A2965"
    },
    heilongjiangStd: {
      title: "黑龙江固体矿产绿色勘查技术规范备案信息",
      url: "https://dbba.sacinfo.org.cn/stdDetail/eedf9541b4724fe2cb2f85dd4c2209cddeb17242d419aced475dae5c0b139582"
    },
    xinjiangGuide: {
      title: "新疆绿色勘查工作指南试行参考 PDF",
      url: "https://zrzyt.xinjiang.gov.cn/xjgtzy/tzgg/202507/7b0306d6753d4225922cf4ecb46caffe/files/%E6%96%B0%E7%96%86%E7%BB%B4%E5%90%BE%E5%B0%94%E8%87%AA%E6%B2%BB%E5%8C%BA%E7%BB%BF%E8%89%B2%E5%8B%98%E6%9F%A5%E5%B7%A5%E4%BD%9C%E6%8C%87%E5%8D%97%EF%BC%88%E8%AF%95%E8%A1%8C%EF%BC%89.pdf"
    },
    demoCase: {
      title: "绿色勘查示范项目公开信息参考页",
      url: "https://zrzyt.xinjiang.gov.cn/xjgtzy/mtxc/202101/091a5f405d2e437e86901c1a4d12267d.shtml"
    }
  };

  const NATIONAL_SOURCES = [PLAN_SOURCE, SOURCES.mineralLaw, SOURCES.greenNotice];
  const STANDARD_SOURCES = [PLAN_SOURCE, SOURCES.dztPage];
  const HENAN_SOURCES = [PLAN_SOURCE, SOURCES.henanOpinion, SOURCES.henanDb, SOURCES.henanReview, SOURCES.henanUnit];
  const CASE_SOURCES = [
    PLAN_SOURCE,
    SOURCES.guizhouStd,
    SOURCES.ningxiaStd,
    SOURCES.qinghaiStd,
    SOURCES.hunanStd,
    SOURCES.anhuiStd,
    SOURCES.innerMongoliaStd,
    SOURCES.liaoningStd,
    SOURCES.heilongjiangStd,
    SOURCES.xinjiangGuide,
    SOURCES.demoCase
  ];

  window.GREEN_TREE_DATA = {
    id: "project_root",
    name: "绿色勘查实训室建设项目",
    devType: "project",
    stage: "项目总览",
    summary: "建设定位调整为绿色勘查虚实融合实训与社会服务科普中心，按照政策要求、岗位任务、实训项目、仪器设备、虚拟仿真、社会培训、公众科普七环节贯通组织。",
    detail: "新版方案的核心形态为绿色勘查综合实训操作台、微型钻探终端、绿色勘查系统、实物工具包和数字嵩山平台。项目不以大型科研仪器堆砌为目标，而是把政策标准、工程方案、现场操作、资料归档、验收答辩和科普展示整合成可落地、可教学、可展示、可运营的实训场景。",
    outputs: ["绿色勘查综合实训平台", "绿色勘查系统", "微型钻探终端", "三类实物工具包", "两类资源包", "数字嵩山平台入口", "验收演示材料"],
    relatedIds: ["equipment_console", "equipment_micro_drill", "system_green", "system_digital_songshan"],
    sources: [PLAN_SOURCE],
    tags: ["七环节", "虚实融合", "双平台", "微型钻探终端", "数字嵩山"],
    children: [
      {
        id: "stage_policy",
        name: "政策要求",
        devType: "content",
        stage: "政策要求",
        summary: "把国家法律法规、专项政策、行业规范、河南地方实践和外省案例转化为可学习、可判断、可填写、可验收的训练内容。",
        detail: "政策要求不以展板陈列为终点，而是进入任务书识读、绿色措施编制、低扰动方法选择、绿色钻探检查、过程留痕和恢复验收等训练动作。",
        outputs: ["政策依据清单", "合规判断题", "绿色勘查措施库", "案例库"],
        relatedIds: ["pack_import", "system_policy", "training_policy"],
        sources: [...NATIONAL_SOURCES, ...STANDARD_SOURCES, ...HENAN_SOURCES, ...CASE_SOURCES],
        tags: ["政策标准", "措施库", "案例判断"],
        children: [
          {
            id: "policy_national",
            name: "国家法律与专项政策",
            devType: "content",
            stage: "政策要求",
            summary: "支撑矿产资源管理、生态环境保护、勘查方案实施、完工清理恢复和绿色勘查专项要求。",
            detail: "国家法律法规和绿色勘查专项政策用于解释为什么要绿色勘查，以及低扰动、减少槽探、以钻代槽、一基多孔和过程留痕如何进入项目合规要求。",
            outputs: ["国家政策依据清单", "政策关键词卡片", "合规判断题"],
            relatedIds: ["job_compliance", "system_policy"],
            sources: NATIONAL_SOURCES,
            tags: ["矿产资源法", "绿色勘查通知", "合规"]
          },
          {
            id: "policy_standard",
            name: "行业技术规范",
            devType: "content",
            stage: "政策要求",
            summary: "以绿色地质勘查工作规范为核心技术底稿，覆盖方案、道路场地、施工、环保、恢复和验收。",
            detail: "行业规范转化为绿色措施表、检查表、恢复验收表和成果资料包，支撑从方案设计到完工验收的全过程训练。",
            outputs: ["规范流程图", "检查表模板", "恢复验收表"],
            relatedIds: ["project_measure_plan", "system_environment"],
            sources: STANDARD_SOURCES,
            tags: ["DZ/T 0374-2021", "技术规范", "恢复验收"]
          },
          {
            id: "policy_henan",
            name: "河南政策与实践",
            devType: "content",
            stage: "政策要求",
            summary: "补充河南省绿色勘查相关意见、地方标准和地质单位公开实践，形成本地化依据。",
            detail: "河南资料用于支撑本省地矿类教学与培训场景，把地方标准、项目实践和单位资源转化为案例卡、任务卡和培训素材。",
            outputs: ["河南政策卡片", "地方标准索引", "本地案例素材"],
            relatedIds: ["system_cases", "training_integrated"],
            sources: HENAN_SOURCES,
            tags: ["河南", "DB41/T 2082-2020", "本地化"]
          },
          {
            id: "policy_province_cases",
            name: "外省标准与案例",
            devType: "content",
            stage: "政策要求",
            summary: "参考贵州、宁夏、青海、湖南、安徽、内蒙古、辽宁、黑龙江、新疆等地标准、指南和示范项目。",
            detail: "外省标准和案例用于横向比较，让学生理解不同地区如何落实低扰动、浆污不落地、恢复治理和验收留痕。",
            outputs: ["横向案例库", "案例判断题", "培训案例页"],
            relatedIds: ["system_cases", "science_green_finding"],
            sources: CASE_SOURCES,
            tags: ["地方标准", "工作指南", "示范项目"]
          },
          {
            id: "policy_measures",
            name: "政策转化任务",
            devType: "content",
            stage: "政策要求",
            summary: "把低扰动优先、减少槽探、以钻代槽、一基多孔、浆污不落地和恢复验收转化为任务与评分项。",
            detail: "政策转化任务进入系统表单、措施库、方法比选、工程比选、泥浆流程和验收评分，形成后续六个任务包的依据。",
            outputs: ["绿色措施表", "方法比选规则", "验收评分项"],
            relatedIds: ["pack_import", "pack_engineering", "pack_drill"],
            sources: [PLAN_SOURCE, SOURCES.greenNotice, SOURCES.dztPage],
            tags: ["低扰动", "以钻代槽", "浆污不落地", "评分"]
          }
        ]
      },
      {
        id: "stage_job",
        name: "岗位任务",
        devType: "content",
        stage: "岗位任务",
        summary: "新版方案把岗位任务收束为 6 个任务群，覆盖项目合规、生态识别、低扰动调查、工程比选、绿色钻探、恢复验收与成果表达。",
        detail: "绿色勘查不是单一岗位任务，而是项目技术、地质调查、钻探施工、环境监测、生态恢复、资料归档和验收答辩共同承担的工作链。",
        outputs: ["岗位任务清单", "能力目标清单", "训练成果清单"],
        relatedIds: ["stage_projects", "stage_training"],
        sources: [PLAN_SOURCE],
        tags: ["岗位化", "任务群", "能力产出"],
        children: [
          {
            id: "job_compliance",
            name: "项目合规与资料",
            devType: "content",
            stage: "岗位任务",
            summary: "对应项目技术员、资料员、环保资料员，完成政策识读、任务书解析、绿色措施编制和资料归档。",
            detail: "该任务群把上位政策和项目任务书转为项目启动材料，训练学生识别绿色勘查要求并形成可归档的成果目录。",
            outputs: ["政策依据清单", "绿色措施表", "资料目录"],
            relatedIds: ["project_policy_reading", "project_archive"],
            sources: [PLAN_SOURCE, SOURCES.mineralLaw, SOURCES.greenNotice],
            tags: ["项目技术员", "资料员", "合规"]
          },
          {
            id: "job_ecology",
            name: "生态约束识别",
            devType: "newDev",
            stage: "岗位任务",
            summary: "对应踏勘技术员、GIS 辅助技术员，识别水系、道路、林地、耕地、村庄、生态敏感区和地灾风险点。",
            detail: "通过绿色勘查系统的图层识别和风险点判断，训练路线避让、工程布置优化和生态约束表达。",
            outputs: ["生态约束识别表", "风险点清单"],
            relatedIds: ["project_ecology", "system_ecology"],
            sources: [PLAN_SOURCE],
            tags: ["生态约束", "GIS 辅助", "风险点"]
          },
          {
            id: "job_low_impact",
            name: "低扰动调查",
            devType: "physical",
            stage: "岗位任务",
            summary: "对应地质调查员、化探采样员、数字填图员，完成路线调查、地质点记录、样品采集和采样点恢复。",
            detail: "依托低扰动调查工具包与系统记录表，把路线模拟、罗盘、GPS、采样编号和标签管理组织成可轮换训练。",
            outputs: ["路线记录", "样品登记", "采样恢复记录"],
            relatedIds: ["project_route", "project_sampling", "equipment_low_impact_pack"],
            sources: [PLAN_SOURCE],
            tags: ["路线调查", "采样", "数字填图"]
          },
          {
            id: "job_engineering",
            name: "工程方案比选",
            devType: "newDev",
            stage: "岗位任务",
            summary: "对应勘查技术员、工程布设助理，比较槽探、浅钻、钻探、以钻代槽和一基多孔方案。",
            detail: "通过综合操作台和微型钻探终端均可完成工程方案比选，重点训练扰动面积统计、方法适用性判断和绿色评分。",
            outputs: ["工程方案比选表", "扰动面积统计表"],
            relatedIds: ["project_drill_replace", "system_engineering"],
            sources: [PLAN_SOURCE, SOURCES.greenNotice, SOURCES.dztPage],
            tags: ["工程比选", "以钻代槽", "一基多孔"]
          },
          {
            id: "job_green_drill",
            name: "绿色钻探与泥浆控制",
            devType: "retrofit",
            stage: "岗位任务",
            summary: "对应钻探技术员、机台环保员，完成开钻前检查、泥浆选择、循环回用、浆污不落地和泄漏应急。",
            detail: "新版方案强调微型钻探终端不是实际钻进机械，而是教学操控终端；钻探专项训练通过液晶触控屏与缩小版操控台联动完成。",
            outputs: ["绿色钻探检查表", "泥浆记录", "应急处置记录"],
            relatedIds: ["project_platform_layout", "project_mud_test", "project_slurry_zero", "equipment_micro_drill"],
            sources: [PLAN_SOURCE, SOURCES.dztPage],
            tags: ["微型钻探终端", "环保泥浆", "浆污不落地"]
          },
          {
            id: "job_restore_output",
            name: "恢复验收与成果表达",
            devType: "platform",
            stage: "岗位任务",
            summary: "对应生态恢复助理、验收资料员，完成清场、封孔、回填、覆土复绿、影像留痕、验收答辩和科普讲解。",
            detail: "把环境监测、恢复验收、资料归档、成果包和答辩表达合并为最终交付能力，支撑教学验收、社会培训和公众科普。",
            outputs: ["恢复验收表", "成果包", "答辩材料", "讲解任务卡"],
            relatedIds: ["project_water_soil", "project_restore", "project_archive", "project_defense"],
            sources: [PLAN_SOURCE],
            tags: ["恢复验收", "成果包", "答辩"]
          }
        ]
      },
      {
        id: "stage_projects",
        name: "实训项目",
        devType: "newDev",
        stage: "实训项目",
        summary: "14 个核心实训项目作为规划清单保留，实际实施按 6 个任务包组织，减少孤立项目和重复开发。",
        detail: "新版方案采用“规划清单完整、实施任务集成”的方式：6 个任务包承载 14 个规划项目，平台、终端、工具包和数字嵩山共同支撑成果化训练。",
        outputs: ["6 个任务包", "14 个规划项目", "实训指导书", "任务卡", "评分表", "成果包目录"],
        relatedIds: ["stage_equipment", "stage_simulation", "system_green"],
        sources: [PLAN_SOURCE],
        tags: ["6 个任务包", "14 个项目", "成果化"],
        children: [
          {
            id: "pack_import",
            name: "任务导入与绿色措施",
            devType: "content",
            stage: "实训项目",
            summary: "承载任务识读、生态判读和措施编制，形成政策依据、任务解析和绿色措施成果。",
            detail: "主要通过综合实训操作台和微型钻探终端完成政策卡片、任务书页面、案例判断、图层识别、措施库和表单评分。",
            outputs: ["政策依据清单", "项目任务解析表", "绿色勘查措施表"],
            relatedIds: ["system_policy", "system_ecology"],
            sources: [PLAN_SOURCE, SOURCES.mineralLaw, SOURCES.greenNotice, SOURCES.dztPage],
            tags: ["任务导入", "措施表", "政策卡片"],
            children: [
              {
                id: "project_policy_reading",
                name: "P1 政策与任务书识读",
                devType: "content",
                stage: "实训项目",
                summary: "通过政策卡片、任务书页面和案例判断完成绿色勘查要求识读。",
                detail: "学生识别政策关键词、项目范围、角色分工、绿色控制项和成果要求，形成项目任务解析表。",
                outputs: ["政策依据清单", "项目任务解析表"],
                relatedIds: ["job_compliance", "system_policy"],
                sources: [PLAN_SOURCE, SOURCES.mineralLaw, SOURCES.greenNotice],
                tags: ["P1", "任务书", "政策识读"]
              },
              {
                id: "project_ecology",
                name: "P2 生态约束识别",
                devType: "newDev",
                stage: "实训项目",
                summary: "通过图层识别、风险点判断和路线优化完成项目区判读。",
                detail: "在预设项目区中识别水系、道路、村庄、林地、耕地、生态敏感区和地灾风险点。",
                outputs: ["生态约束识别表", "风险点清单"],
                relatedIds: ["job_ecology", "system_ecology"],
                sources: [PLAN_SOURCE],
                tags: ["P2", "图层识别", "风险点"]
              },
              {
                id: "project_measure_plan",
                name: "P3 措施表填写",
                devType: "content",
                stage: "实训项目",
                summary: "通过措施库、表单模板和规则评分完成绿色勘查措施表。",
                detail: "围绕低扰动、泥浆、防渗、恢复和留痕要求，选择措施并提交表单。",
                outputs: ["绿色勘查措施表"],
                relatedIds: ["policy_measures", "system_policy"],
                sources: [PLAN_SOURCE, SOURCES.dztPage],
                tags: ["P3", "措施库", "规则评分"]
              }
            ]
          },
          {
            id: "pack_low_impact",
            name: "低扰动调查与方法选择",
            devType: "physical",
            stage: "实训项目",
            summary: "承载数字路线、低扰动采样和物化遥低扰动方法选择。",
            detail: "由绿色勘查系统和低扰动调查工具包共同支撑，强调野外基础技能与数字记录结合。",
            outputs: ["路线调查记录表", "样品登记表", "方法比选表"],
            relatedIds: ["equipment_low_impact_pack", "system_method"],
            sources: [PLAN_SOURCE, SOURCES.greenNotice, SOURCES.dztPage],
            tags: ["低扰动", "方法选择", "工具包"],
            children: [
              {
                id: "project_route",
                name: "P4 数字路线与低扰动调查",
                devType: "physical",
                stage: "实训项目",
                summary: "通过路线模拟、罗盘、GPS 和记录表完成路线调查。",
                detail: "学生完成路线选择、地质点记录、踏勘路线优化和低扰动调查记录。",
                outputs: ["路线调查记录表"],
                relatedIds: ["job_low_impact", "equipment_low_impact_pack"],
                sources: [PLAN_SOURCE],
                tags: ["P4", "路线模拟", "罗盘"]
              },
              {
                id: "project_sampling",
                name: "P5 低扰动样品采集",
                devType: "physical",
                stage: "实训项目",
                summary: "通过采样工具、样品袋、标签和记录表完成样品采集与编号。",
                detail: "训练样品编号、标签管理、样品登记和采样点恢复，避免把采样训练做成单纯器材展示。",
                outputs: ["样品登记表", "采样点恢复记录"],
                relatedIds: ["job_low_impact", "equipment_low_impact_pack"],
                sources: [PLAN_SOURCE],
                tags: ["P5", "采样编号", "标签"]
              },
              {
                id: "project_method_compare",
                name: "P6 物化遥方法选择",
                devType: "newDev",
                stage: "实训项目",
                summary: "通过方法卡片、场景判断和方案评分完成低扰动方法选择。",
                detail: "比较遥感、物探、化探、浅钻、槽探、钻探等方法的扰动差异和适用条件。",
                outputs: ["方法比选表"],
                relatedIds: ["job_engineering", "system_method"],
                sources: [PLAN_SOURCE, SOURCES.greenNotice],
                tags: ["P6", "物化遥", "方法比选"]
              }
            ]
          },
          {
            id: "pack_engineering",
            name: "工程方案比选",
            devType: "newDev",
            stage: "实训项目",
            summary: "承载以钻代槽、一基多孔和扰动面积计算，综合操作台与微型钻探终端均可完成。",
            detail: "学生在系统中比较工程布置方案，输出工程方案比选表和扰动面积统计表。",
            outputs: ["工程方案比选表", "扰动面积统计表"],
            relatedIds: ["system_engineering", "equipment_console", "equipment_micro_drill"],
            sources: [PLAN_SOURCE, SOURCES.greenNotice, SOURCES.dztPage],
            tags: ["工程比选", "扰动面积", "一基多孔"],
            children: [
              {
                id: "project_drill_replace",
                name: "P7 以钻代槽与一基多孔",
                devType: "newDev",
                stage: "实训项目",
                summary: "在操作台和终端中完成以钻代槽、一基多孔和扰动面积方案比选。",
                detail: "比较传统槽探方案与绿色钻探方案，形成工程方案选择依据和绿色评分。",
                outputs: ["工程方案比选表", "扰动面积统计表"],
                relatedIds: ["job_engineering", "system_engineering"],
                sources: [PLAN_SOURCE, SOURCES.greenNotice],
                tags: ["P7", "以钻代槽", "一基多孔"]
              }
            ]
          },
          {
            id: "pack_drill",
            name: "绿色钻探与泥浆控制",
            devType: "retrofit",
            stage: "实训项目",
            summary: "承载绿色钻探机台布置、环保泥浆检测、浆污不落地循环与应急处置。",
            detail: "微型钻探终端为主，综合实训操作台同步具备完整功能；线下泥浆工具包提供检测和循环演示。",
            outputs: ["绿色钻探检查表", "泥浆检测记录", "浆污不落地检查表"],
            relatedIds: ["equipment_micro_drill", "equipment_slurry_pack", "system_drill"],
            sources: [PLAN_SOURCE, SOURCES.dztPage],
            tags: ["钻探终端", "泥浆", "应急处置"],
            children: [
              {
                id: "project_platform_layout",
                name: "P8 绿色钻探机台布置",
                devType: "retrofit",
                stage: "实训项目",
                summary: "在绿色勘查系统中完成钻探场地布置任务。",
                detail: "训练开钻前检查、防渗铺设、场地分区、材料摆放和检查表填写。",
                outputs: ["绿色钻探检查表", "机台布置记录"],
                relatedIds: ["job_green_drill", "system_drill"],
                sources: [PLAN_SOURCE],
                tags: ["P8", "机台布置", "开钻检查"]
              },
              {
                id: "project_mud_test",
                name: "P9 环保泥浆检测",
                devType: "physical",
                stage: "实训项目",
                summary: "通过线下检测工具和系统记录完成环保泥浆配制与性能检测。",
                detail: "使用泥浆检测仪器、透明循环装置和记录表，形成泥浆参数记录和选择依据。",
                outputs: ["泥浆检测记录", "泥浆选择记录"],
                relatedIds: ["equipment_slurry_pack", "system_drill"],
                sources: [PLAN_SOURCE],
                tags: ["P9", "环保泥浆", "检测"]
              },
              {
                id: "project_slurry_zero",
                name: "P10 浆污不落地",
                devType: "retrofit",
                stage: "实训项目",
                summary: "通过微型钻探终端互动和泥浆工具包完成循环回用、收集和泄漏应急。",
                detail: "训练泥浆循环、防渗、废浆收集、泄漏应急和记录归档，强调泥浆不能直接落地。",
                outputs: ["浆污不落地检查表", "应急处置记录"],
                relatedIds: ["job_green_drill", "equipment_slurry_pack"],
                sources: [PLAN_SOURCE, SOURCES.dztPage],
                tags: ["P10", "浆污不落地", "循环回用"]
              }
            ]
          },
          {
            id: "pack_environment",
            name: "环境监测与恢复验收",
            devType: "physical",
            stage: "实训项目",
            summary: "承载水土环境基线监测和完工清场、封孔与复绿。",
            detail: "微型钻探终端、综合实训操作台和环境监测与恢复验收工具包共同支撑恢复验收训练。",
            outputs: ["水土检测记录", "封孔验收表", "复绿验收表"],
            relatedIds: ["equipment_environment_pack", "system_environment"],
            sources: [PLAN_SOURCE, SOURCES.dztPage],
            tags: ["水土监测", "封孔", "复绿"],
            children: [
              {
                id: "project_water_soil",
                name: "P11 水土环境监测",
                devType: "physical",
                stage: "实训项目",
                summary: "通过检测工具和记录表完成水土环境基线监测。",
                detail: "记录施工前后水质、土壤和扰动范围，形成恢复验收支撑资料。",
                outputs: ["水质检测记录", "土壤检测记录"],
                relatedIds: ["equipment_environment_pack", "system_environment"],
                sources: [PLAN_SOURCE],
                tags: ["P11", "水质", "土壤"]
              },
              {
                id: "project_restore",
                name: "P12 清场封孔复绿",
                devType: "retrofit",
                stage: "实训项目",
                summary: "通过终端流程、恢复材料包和验收表完成完工清场、封孔与复绿。",
                detail: "训练清场、封孔、回填、覆土复绿、前后照片对比和恢复验收判断。",
                outputs: ["封孔验收表", "复绿验收表", "前后影像对比"],
                relatedIds: ["job_restore_output", "equipment_environment_pack"],
                sources: [PLAN_SOURCE, SOURCES.dztPage],
                tags: ["P12", "清场", "封孔", "复绿"]
              }
            ]
          },
          {
            id: "pack_output",
            name: "成果包与验收表达",
            devType: "platform",
            stage: "实训项目",
            summary: "承载绿色勘查资料归档和绿色勘查综合项目答辩。",
            detail: "由绿色勘查系统和数字嵩山平台支撑成果资料包、评分表、答辩材料和讲解任务卡。",
            outputs: ["成果资料包", "评分表", "答辩材料", "讲解任务卡"],
            relatedIds: ["system_archive", "system_digital_songshan"],
            sources: [PLAN_SOURCE],
            tags: ["成果包", "评分", "答辩"],
            children: [
              {
                id: "project_archive",
                name: "P13 资料归档",
                devType: "platform",
                stage: "实训项目",
                summary: "通过成果包目录、表单模板和数字嵩山挂接完成绿色勘查资料归档。",
                detail: "归档措施表、比选表、泥浆记录、验收表、过程照片和评分记录。",
                outputs: ["绿色勘查资料包", "资源挂接记录"],
                relatedIds: ["job_compliance", "system_archive"],
                sources: [PLAN_SOURCE],
                tags: ["P13", "资料归档", "数字嵩山"]
              },
              {
                id: "project_defense",
                name: "P14 综合项目答辩",
                devType: "content",
                stage: "实训项目",
                summary: "通过成果展示、评分表和角色化质询完成绿色勘查综合项目答辩。",
                detail: "学生以项目角色汇报方案选择、绿色措施、钻探控制、恢复验收和成果资料，形成验收答辩闭环。",
                outputs: ["答辩材料", "答辩评分表"],
                relatedIds: ["job_restore_output", "system_archive"],
                sources: [PLAN_SOURCE],
                tags: ["P14", "答辩", "成果表达"]
              }
            ]
          }
        ]
      },
      {
        id: "stage_equipment",
        name: "仪器设备",
        devType: "physical",
        stage: "仪器设备",
        summary: "新版建设内容采用“双平台 + 三类工具包 + 两类资源包”的结构。",
        detail: "双平台包括绿色勘查综合实训操作台和微型钻探终端；三类工具包包括泥浆与浆污不落地、环境监测与恢复验收、低扰动调查；两类资源包包括政策任务与成果资料包、培训与科普资源包。",
        outputs: ["设备和资源清单", "安装调试记录", "操作说明", "演示流程"],
        relatedIds: ["stage_projects", "stage_simulation"],
        sources: [PLAN_SOURCE],
        tags: ["双平台", "三类工具包", "两类资源包"],
        children: [
          {
            id: "equipment_console",
            name: "综合实训操作台",
            devType: "newDev",
            stage: "仪器设备",
            summary: "实体模型底座、内嵌电脑、触摸屏和绿色勘查系统，承担全流程展示、项目推演、教师演示、成果汇总和评分导出。",
            detail: "综合操作台具备绿色勘查系统全部功能，适合教师演示、项目区总览、流程讲解、方案讨论和验收答辩展示。",
            outputs: ["操作台实体", "触摸屏系统", "评分导出样表"],
            relatedIds: ["system_console_deploy", "system_green"],
            sources: [PLAN_SOURCE],
            tags: ["操作台", "全流程展示", "教师演示"]
          },
          {
            id: "equipment_micro_drill",
            name: "微型钻探终端",
            devType: "retrofit",
            stage: "仪器设备",
            summary: "缩小版钻探操控台、液晶触控屏和绿色勘查系统，建议配置 4 至 8 台。",
            detail: "微型钻探终端不是实际钻进机械，而是面向教学训练的操控终端。其触控屏可完成绿色勘查系统全部操作，操控台用于钻探相关内容的交互式训练。",
            outputs: ["微型钻探操控终端", "终端操作记录", "钻探专项训练流程"],
            relatedIds: ["system_terminal_deploy", "pack_drill"],
            sources: [PLAN_SOURCE],
            tags: ["微型钻探终端", "触控屏", "分组训练"]
          },
          {
            id: "equipment_slurry_pack",
            name: "泥浆与浆污不落地工具包",
            devType: "physical",
            stage: "仪器设备",
            summary: "包含泥浆检测仪器、透明循环装置、防渗材料、废浆桶和应急材料。",
            detail: "支撑泥浆检测、泥浆循环、防渗、废浆收集和泄漏应急处置的线下演示与记录。",
            outputs: ["泥浆工具包", "检测操作说明", "应急演示流程"],
            relatedIds: ["project_mud_test", "project_slurry_zero"],
            sources: [PLAN_SOURCE],
            tags: ["泥浆", "防渗", "废浆收集"]
          },
          {
            id: "equipment_environment_pack",
            name: "环境监测与恢复验收工具包",
            devType: "physical",
            stage: "仪器设备",
            summary: "包含水质土壤检测工具、封孔材料、草毯、生态袋和复绿样方。",
            detail: "支撑水土监测、封孔、清场、回填、覆土复绿和验收记录。",
            outputs: ["环境监测工具包", "恢复验收工具包", "复绿样方"],
            relatedIds: ["project_water_soil", "project_restore"],
            sources: [PLAN_SOURCE],
            tags: ["水土检测", "封孔材料", "复绿"]
          },
          {
            id: "equipment_low_impact_pack",
            name: "低扰动调查工具包",
            devType: "physical",
            stage: "仪器设备",
            summary: "包含罗盘、GPS、测距、采样、标签、记录板和标识旗。",
            detail: "支撑路线调查、采样编号、点位记录和低扰动方法认知。",
            outputs: ["低扰动调查工具包", "点位记录表", "样品标签"],
            relatedIds: ["project_route", "project_sampling"],
            sources: [PLAN_SOURCE],
            tags: ["罗盘", "GPS", "采样"]
          },
          {
            id: "equipment_policy_resource_pack",
            name: "政策任务与成果资料包",
            devType: "content",
            stage: "仪器设备",
            summary: "包含政策卡片、任务书、措施表、检查表、评分表和成果包模板。",
            detail: "支撑政策学习、任务推演、资料归档和验收答辩。",
            outputs: ["政策卡片", "任务书", "成果包模板"],
            relatedIds: ["pack_import", "pack_output"],
            sources: [PLAN_SOURCE, SOURCES.mineralLaw, SOURCES.greenNotice, SOURCES.dztPage],
            tags: ["政策任务", "表单模板", "成果资料"]
          },
          {
            id: "equipment_training_science_pack",
            name: "培训与科普资源包",
            devType: "content",
            stage: "仪器设备",
            summary: "包含培训讲义、任务卡、科普讲解词、展品标签和参观动线。",
            detail: "支撑社会培训、公众科普和对外展示，避免另建独立培训或科普系统。",
            outputs: ["培训讲义", "讲解词", "展品标签", "参观动线"],
            relatedIds: ["stage_training", "stage_science"],
            sources: [PLAN_SOURCE],
            tags: ["培训资源", "科普资源", "展品标签"]
          }
        ]
      },
      {
        id: "stage_simulation",
        name: "虚拟仿真",
        devType: "platform",
        stage: "虚拟仿真",
        summary: "新版方案将核心软件明确为绿色勘查系统，并要求在综合实训操作台和微型钻探终端上双平台部署，同时接入数字嵩山平台。",
        detail: "绿色勘查系统同时满足项目级方案训练和钻探级操控训练。数字嵩山平台重点承担入口、资源挂接、记录沉淀、成果留存和评分导出，不建设复杂独立管理系统。",
        outputs: ["绿色勘查系统", "双平台部署", "数字嵩山入口", "资源目录", "导出样表"],
        relatedIds: ["equipment_console", "equipment_micro_drill", "system_digital_songshan"],
        sources: [PLAN_SOURCE],
        tags: ["绿色勘查系统", "双平台部署", "数字嵩山"],
        children: [
          {
            id: "system_green",
            name: "绿色勘查系统",
            devType: "newDev",
            stage: "虚拟仿真",
            summary: "核心软件平台，覆盖任务导入、生态约束、低扰动方法、工程比选、绿色钻探、环境恢复、成果归档和培训科普资源。",
            detail: "系统在综合操作台和微型钻探终端上均具备完整功能，差异主要体现在操作形态和教学组织方式。",
            outputs: ["系统功能清单", "操作界面", "评分记录"],
            relatedIds: ["system_policy", "system_drill", "system_archive"],
            sources: [PLAN_SOURCE],
            tags: ["核心软件", "完整功能", "评分记录"],
            children: [
              {
                id: "system_policy",
                name: "任务导入与政策学习",
                devType: "content",
                stage: "虚拟仿真",
                summary: "项目任务书、政策关键词、标准流程和合规判断。",
                detail: "适合教师任务发布，也适合学生个人或小组学习。",
                outputs: ["政策学习记录", "合规判断结果"],
                relatedIds: ["pack_import", "policy_national"],
                sources: NATIONAL_SOURCES,
                tags: ["政策学习", "合规判断"]
              },
              {
                id: "system_ecology",
                name: "生态约束识别",
                devType: "newDev",
                stage: "虚拟仿真",
                summary: "识别水系、道路、村庄、林地、耕地、生态敏感区和地灾风险点。",
                detail: "综合操作台适合项目区总览和讲解，微型钻探终端适合小组独立判读。",
                outputs: ["生态约束识别表", "风险点清单"],
                relatedIds: ["project_ecology", "job_ecology"],
                sources: [PLAN_SOURCE],
                tags: ["图层识别", "风险点"]
              },
              {
                id: "system_method",
                name: "低扰动方法选择",
                devType: "newDev",
                stage: "虚拟仿真",
                summary: "比较遥感、物探、化探、浅钻、槽探、钻探等方法。",
                detail: "支撑方案讨论、小组任务提交和方法比选表生成。",
                outputs: ["方法比选表", "方案评分"],
                relatedIds: ["project_method_compare"],
                sources: [PLAN_SOURCE, SOURCES.greenNotice],
                tags: ["方法选择", "低扰动"]
              },
              {
                id: "system_engineering",
                name: "工程方案比选",
                devType: "newDev",
                stage: "虚拟仿真",
                summary: "完成以钻代槽、一基多孔、扰动面积计算和方案评分。",
                detail: "综合操作台适合方案推演和成果汇总，微型钻探终端适合学生独立完成工程比选。",
                outputs: ["工程方案比选表", "扰动面积统计表", "绿色评分"],
                relatedIds: ["pack_engineering", "project_drill_replace"],
                sources: [PLAN_SOURCE, SOURCES.greenNotice],
                tags: ["工程比选", "扰动面积"]
              },
              {
                id: "system_drill",
                name: "绿色钻探控制",
                devType: "retrofit",
                stage: "虚拟仿真",
                summary: "完成开钻前检查、钻探流程、泥浆选择、浆污不落地和应急处置。",
                detail: "微型钻探终端可结合操控台开展交互式操作，综合操作台可用于教师演示和流程总览。",
                outputs: ["绿色钻探检查表", "泥浆记录", "应急处置记录"],
                relatedIds: ["pack_drill", "equipment_micro_drill"],
                sources: [PLAN_SOURCE, SOURCES.dztPage],
                tags: ["钻探终端", "泥浆", "应急"]
              },
              {
                id: "system_environment",
                name: "环境监测与恢复验收",
                devType: "physical",
                stage: "虚拟仿真",
                summary: "完成水土检测、清场、封孔、回填、覆土复绿和影像留痕。",
                detail: "适合恢复验收流程讲解、钻探结束后的恢复训练和资料汇总。",
                outputs: ["水土检测记录", "恢复验收表", "影像留痕"],
                relatedIds: ["pack_environment", "equipment_environment_pack"],
                sources: [PLAN_SOURCE, SOURCES.dztPage],
                tags: ["环境监测", "恢复验收"]
              },
              {
                id: "system_archive",
                name: "成果归档与评分",
                devType: "platform",
                stage: "虚拟仿真",
                summary: "管理措施表、检查表、记录表、恢复验收表、成果包和评分表。",
                detail: "综合操作台适合成果汇总和答辩展示，微型钻探终端适合个人或小组评分记录。",
                outputs: ["成果包", "评分表", "导出样表"],
                relatedIds: ["pack_output", "system_digital_songshan"],
                sources: [PLAN_SOURCE],
                tags: ["成果归档", "评分导出"]
              },
              {
                id: "system_training_science",
                name: "培训与科普资源",
                devType: "content",
                stage: "虚拟仿真",
                summary: "挂接培训课程包、科普讲解词、任务卡和案例资源。",
                detail: "综合操作台适合培训和开放展示，微型钻探终端适合互动体验和分组讲解。",
                outputs: ["培训课程包", "科普任务卡", "案例资源"],
                relatedIds: ["stage_training", "stage_science"],
                sources: [PLAN_SOURCE],
                tags: ["培训", "科普", "资源包"]
              }
            ]
          },
          {
            id: "system_dual_platform",
            name: "双平台部署",
            devType: "platform",
            stage: "虚拟仿真",
            summary: "综合实训操作台和微型钻探终端均具备绿色勘查系统全部功能。",
            detail: "综合操作台侧重全流程展示、教师演示、项目推演和成果汇总；微型钻探终端侧重学生分组开展钻探专项操控训练。",
            outputs: ["双平台部署说明", "终端功能对照表"],
            relatedIds: ["equipment_console", "equipment_micro_drill"],
            sources: [PLAN_SOURCE],
            tags: ["综合操作台", "微型钻探终端", "完整功能"],
            children: [
              {
                id: "system_console_deploy",
                name: "操作台部署",
                devType: "newDev",
                stage: "虚拟仿真",
                summary: "面向教师演示、项目推演、流程总览、成果汇总和验收答辩。",
                detail: "以触摸屏和实体模型展示绿色勘查全过程。",
                outputs: ["操作台系统演示", "成果汇总界面"],
                relatedIds: ["equipment_console", "system_green"],
                sources: [PLAN_SOURCE],
                tags: ["教师演示", "项目推演"]
              },
              {
                id: "system_terminal_deploy",
                name: "终端部署",
                devType: "retrofit",
                stage: "虚拟仿真",
                summary: "面向学生分组训练、钻探专项操作、泥浆与恢复验收训练。",
                detail: "除触屏操作外，增加钻探操控部件参与钻探部分交互。",
                outputs: ["终端操作记录", "分组训练记录"],
                relatedIds: ["equipment_micro_drill", "system_drill"],
                sources: [PLAN_SOURCE],
                tags: ["分组训练", "钻探交互"]
              }
            ]
          },
          {
            id: "system_digital_songshan",
            name: "数字嵩山平台集成",
            devType: "platform",
            stage: "虚拟仿真",
            summary: "设置绿色勘查实训室入口，挂接政策、案例、表单、培训和科普资源，沉淀成果包，导出评分表或验收记录。",
            detail: "数字嵩山平台不作为独立操控终端，重点承担资源挂接、成果留存和展示入口。",
            outputs: ["平台入口截图", "资源目录", "成果留存记录", "导出样表"],
            relatedIds: ["project_archive", "project_defense", "equipment_policy_resource_pack"],
            sources: [PLAN_SOURCE],
            tags: ["入口", "资源挂接", "成果留存", "评分导出"]
          }
        ]
      },
      {
        id: "stage_training",
        name: "社会培训",
        devType: "content",
        stage: "社会培训",
        summary: "新版方案把社会培训收束为三类短周期、项目化、应用型培训产品。",
        detail: "培训依托绿色勘查系统、综合实训操作台、微型钻探终端和实物工具包，不建设独立报名系统、证书系统或在线管理平台。",
        outputs: ["培训 PPT", "讲义", "任务卡", "表单模板", "题库", "评分表", "组织手册"],
        relatedIds: ["equipment_training_science_pack", "system_training_science"],
        sources: [PLAN_SOURCE],
        tags: ["政策宣贯", "钻探专项", "项目化综合培训"],
        children: [
          {
            id: "training_policy",
            name: "半日制政策宣贯",
            devType: "content",
            stage: "社会培训",
            summary: "面向管理人员、项目技术人员和合作单位人员，讲解政策要求、规范流程、合规风险、典型案例和资料包组成。",
            detail: "形成政策讲义、案例判断题和培训反馈表，适合短时宣贯和来访交流。",
            outputs: ["政策讲义", "案例判断题", "培训反馈表"],
            relatedIds: ["policy_national", "policy_standard", "policy_henan"],
            sources: [...NATIONAL_SOURCES, ...STANDARD_SOURCES, ...HENAN_SOURCES],
            tags: ["半日制", "政策宣贯", "案例解读"]
          },
          {
            id: "training_drill",
            name: "一日制钻探专项",
            devType: "retrofit",
            stage: "社会培训",
            summary: "面向钻探技术人员、机台环保员和安全环保人员，开展绿色钻探与浆污不落地专项培训。",
            detail: "内容包括开钻前检查、环保泥浆、泥浆检测、循环回用、泄漏应急和封孔复绿。",
            outputs: ["绿色钻探检查表", "泥浆记录", "应急处置记录"],
            relatedIds: ["pack_drill", "equipment_micro_drill", "equipment_slurry_pack"],
            sources: [PLAN_SOURCE, SOURCES.dztPage],
            tags: ["一日制", "钻探专项", "浆污不落地"]
          },
          {
            id: "training_integrated",
            name: "两日制综合培训",
            devType: "platform",
            stage: "社会培训",
            summary: "面向地勘项目技术员、资料员、企业环保人员和职业教育教师，开展绿色勘查项目化综合培训。",
            detail: "完整覆盖任务书识读、生态约束、低扰动方法、工程比选、绿色钻探、恢复验收和成果答辩。",
            outputs: ["绿色措施表", "工程比选表", "成果资料包", "答辩评分表"],
            relatedIds: ["stage_projects", "system_digital_songshan"],
            sources: [PLAN_SOURCE, SOURCES.henanDb, SOURCES.demoCase],
            tags: ["两日制", "项目化", "综合培训"]
          }
        ]
      },
      {
        id: "stage_science",
        name: "公众科普",
        devType: "content",
        stage: "公众科普",
        summary: "新版方案把公众科普定位为把专业内容转化为公众能理解、能参与、能记住的绿色勘查故事。",
        detail: "公众科普依托绿色勘查系统、综合实训操作台、微型钻探终端和科普资源包，不建设独立科普馆。",
        outputs: ["15 分钟快速参观", "30 分钟互动体验", "60 分钟研学体验", "讲解词", "任务卡", "展品标签", "问答题库"],
        relatedIds: ["equipment_training_science_pack", "system_training_science"],
        sources: [PLAN_SOURCE],
        tags: ["科普故事线", "参观动线", "研学体验"],
        children: [
          {
            id: "science_green_finding",
            name: "绿色找矿与低扰动",
            devType: "content",
            stage: "公众科普",
            summary: "讲清找矿为什么也要绿色化、低扰动找矿工具箱和少开挖。",
            detail: "通过操作台演示、方法卡片、工具样品和案例判断，让公众理解资源勘查与生态保护可以协同推进。",
            outputs: ["绿色找矿讲解词", "方法卡片", "案例判断题"],
            relatedIds: ["project_method_compare", "equipment_low_impact_pack"],
            sources: [PLAN_SOURCE, SOURCES.greenNotice, SOURCES.demoCase],
            tags: ["绿色找矿", "低扰动", "少开挖"]
          },
          {
            id: "science_slurry_travel",
            name: "一滴泥浆的绿色旅行",
            devType: "physical",
            stage: "公众科普",
            summary: "讲清环保泥浆、泥浆循环、浆污不落地和泄漏应急。",
            detail: "通过微型钻探终端互动、透明循环装置和防渗材料展示，让公众理解钻探泥浆为什么不能直接落地，以及如何循环和处置。",
            outputs: ["泥浆旅行讲解词", "透明循环演示", "互动任务卡"],
            relatedIds: ["equipment_micro_drill", "equipment_slurry_pack"],
            sources: [PLAN_SOURCE, SOURCES.dztPage],
            tags: ["泥浆旅行", "循环回用", "防渗"]
          },
          {
            id: "science_land_restore",
            name: "土地恢复与地质认知",
            devType: "physical",
            stage: "公众科普",
            summary: "讲清清场、封孔、回填、覆土复绿和嵩山类地质资源认知。",
            detail: "通过复绿材料、前后照片对比和数字嵩山资源链接，让公众理解勘查结束后的恢复验收和地质资源保护关系。",
            outputs: ["土地恢复讲解词", "前后照片对比", "数字嵩山资源链接"],
            relatedIds: ["project_restore", "system_digital_songshan"],
            sources: [PLAN_SOURCE],
            tags: ["土地恢复", "封孔", "数字嵩山"]
          },
          {
            id: "science_visit_routes",
            name: "科普参观动线",
            devType: "content",
            stage: "公众科普",
            summary: "形成 15 分钟快速参观、30 分钟互动体验和 60 分钟“小小绿色勘查员”研学体验。",
            detail: "配套讲解词、任务卡、展品标签、问答题库和二维码资源，适合招生展示、科普开放和来访接待。",
            outputs: ["15 分钟动线", "30 分钟动线", "60 分钟研学动线", "二维码资源"],
            relatedIds: ["equipment_training_science_pack"],
            sources: [PLAN_SOURCE],
            tags: ["15 分钟", "30 分钟", "60 分钟", "研学"]
          }
        ]
      }
    ]
  };
})();
