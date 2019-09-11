const riddles = [
    {question: "年纪并不大，\n胡子一大把，\n不论遇见谁，\n总爱喊妈妈。\n(打一动物)\n", answer: "羊"},
    {question: "一位游泳家，\n说话呱呱呱，\n小时有尾没有脚，\n大时有脚没尾巴。\n(打一动物)\n", answer: "青蛙"},
    {question: "皮黑肉儿白，\n肚里墨样黑，\n从不偷东西，\n硬说它是贼。\n(打一动物)\n", answer: "乌贼"},
    {question: "名字叫做牛，\n不会拉犁头，\n说它力气小，\n背着房子走。\n(打一动物)\n", answer: "蜗牛"},
    {question: "生在山中，颜色相同，\n来到人间，有绿有红。\n(打一植物)", answer: "茶叶"},
    {question: "小小一姑娘，\n坐在水中央，\n身穿粉红袄，\n阵阵放清香。\n(打一植物)\n", answer: "荷花"},
    {question: "泥里一条龙，\n头顶一个蓬，\n身体一节节，\n满肚小窟窿。\n(打一植物)\n", answer: "莲藕"},
    {question: "麻壳子，红里子，\n裹着白胖子。\n(打一植物)\n", answer: "花生"},
    {question: "高高绿骨儿，\n圆圆金黄脸，\n最爱向太阳，\n盈盈笑不停。\n(打一植物)\n", answer: "向日葵"},
    {question: "一个孩子生的好，\n衣服穿了七八套，\n头上戴着红缨帽，\n身上装着珍珠宝。\n(打一植物)\n", answer: "玉米"},
    {question: "白如玉，穿黄袍，\n只有一点大，\n都是宝中宝。\n(打一植物)\n", answer: "水稻"},
    {question: "小时能吃味道鲜，\n老是能用有人砍，\n虽说不是刚和铁，\n浑身骨节压不湾。\n(打一植物)", answer: "竹子"},
    {question: "头上青丝如针刺，\n皮肤厚裂像龟甲，\n越是寒冷越昂扬，\n一年四季精神好。\n(打一植物)", answer: "松树"},
    {question: "生根不落地，\n有夜不开花，\n市场有得卖，\n园里不种他。\n(打一蔬菜)", answer: "豆芽"}
];

module.exports = function() {
    var riddle = riddles[Math.floor(Math.random() * riddles.length)];
    return "谜面：\n" + riddle.question + "\n谜底：" + riddle.answer;
}
