<template>
  <header>
    <div class="clip_path">
      <div class="stars"></div>
      <div class="stars2"></div>
      <div class="stars3"></div>
      <Carousel />
      <div class="intro">
        <h1>A platform specialized in selling accounts</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>
          <span>Start now</span>
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
    <div class="chevron_down">
      <div class="chevron">
        <i class="fad fa-chevron-double-down"></i>
      </div>
    </div>
  </header>
</template>

<script>
import Carousel from "./Carousel";
export default {
  components: { Carousel },
};
</script>

<style lang="scss" scoped>
header {
  position: relative;
  width: 100%;
  height: 100vh;
  z-index: 1;
  transition: 0.6s;
  // overflow: hidden;
  filter: drop-shadow(0 0.8rem 1.3rem #000);

  .clip_path {
    height: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 50%, 100% 90%, 49% 99%, 0 90%);
  }

  .stars,
  .stars2,
  .stars3 {
    position: absolute;
    z-index: 1;
    background: transparent;
  }

  .stars {
    width: 0.2rem;
    height: 0.2rem;
    animation: animStar 50s linear infinite;
    box-shadow: 261px 434px #fff, 1014px 1145px #fff, 383px 754px #fff,
      1326px 1571px #fff, 334px 450px #fff, 53px 1711px #fff, 1443px 552px #fff,
      1594px 555px #fff, 1376px 750px #fff, 163px 1490px #fff, 75px 637px #fff,
      303px 1190px #fff, 1473px 905px #fff, 232px 1423px #fff, 219px 281px #fff,
      1174px 1336px #fff, 1527px 1330px #fff, 24px 1589px #fff,
      1477px 364px #fff, 1517px 1419px #fff, 1472px 1388px #fff,
      1461px 38px #fff, 927px 227px #fff, 1835px 210px #fff, 282px 152px #fff,
      1132px 536px #fff, 1359px 1500px #fff, 1593px 5px #fff, 395px 579px #fff,
      1053px 1815px #fff, 1552px 731px #fff, 285px 1383px #fff,
      1591px 1468px #fff, 445px 744px #fff, 1474px 146px #fff, 981px 1247px #fff,
      486px 1826px #fff, 1717px 402px #fff, 1714px 269px #fff, 118px 1748px #fff,
      543px 1728px #fff, 1641px 1954px #fff, 1813px 1533px #fff,
      1283px 1670px #fff, 643px 45px #fff, 298px 1988px #fff, 1024px 1894px #fff,
      464px 1767px #fff, 496px 242px #fff, 1443px 721px #fff, 825px 253px #fff,
      1552px 1856px #fff, 1396px 992px #fff, 843px 1346px #fff, 174px 867px #fff,
      561px 1746px #fff, 1628px 57px #fff, 73px 160px #fff, 1368px 1576px #fff,
      1761px 1128px #fff, 620px 981px #fff, 1426px 348px #fff, 1062px 699px #fff,
      1075px 774px #fff, 1139px 99px #fff, 1244px 492px #fff, 838px 812px #fff,
      929px 43px #fff, 1211px 846px #fff, 657px 1259px #fff, 671px 521px #fff,
      234px 1594px #fff, 108px 1676px #fff, 1185px 672px #fff, 1470px 4px #fff,
      1629px 29px #fff, 686px 463px #fff, 32px 1694px #fff, 1987px 642px #fff,
      1519px 1870px #fff, 476px 915px #fff, 98px 1620px #fff, 629px 728px #fff,
      1755px 471px #fff, 716px 1648px #fff, 1334px 631px #fff, 58px 757px #fff,
      338px 954px #fff, 576px 1622px #fff, 402px 899px #fff, 1062px 1866px #fff,
      745px 312px #fff, 1956px 800px #fff, 1224px 95px #fff, 1637px 178px #fff,
      1466px 1152px #fff, 1398px 1111px #fff, 1166px 305px #fff,
      1845px 748px #fff, 308px 1969px #fff, 970px 1224px #fff, 440px 983px #fff,
      1925px 1164px #fff, 1027px 1768px #fff, 1896px 420px #fff,
      155px 634px #fff, 1696px 1395px #fff, 1143px 1556px #fff, 112px 182px #fff,
      5px 404px #fff, 570px 1083px #fff, 319px 536px #fff, 368px 867px #fff,
      1268px 781px #fff, 1711px 818px #fff, 908px 664px #fff, 630px 1013px #fff,
      347px 1746px #fff, 1896px 1844px #fff, 1988px 299px #fff,
      1801px 252px #fff, 149px 18px #fff, 1877px 1354px #fff, 1937px 510px #fff,
      1071px 517px #fff, 259px 881px #fff, 1612px 1707px #fff, 301px 926px #fff,
      1380px 623px #fff, 1px 1621px #fff, 1666px 1956px #fff, 703px 1265px #fff,
      80px 864px #fff, 371px 711px #fff, 1076px 8px #fff, 650px 281px #fff,
      1445px 1175px #fff, 1896px 1158px #fff, 1533px 691px #fff,
      1804px 1483px #fff, 1824px 424px #fff, 1973px 1227px #fff,
      719px 1927px #fff, 850px 289px #fff, 1264px 896px #fff, 487px 865px #fff,
      89px 205px #fff, 1659px 61px #fff, 1011px 1414px #fff, 1536px 866px #fff,
      894px 1958px #fff, 1475px 521px #fff, 727px 661px #fff, 326px 839px #fff,
      256px 957px #fff, 1318px 805px #fff, 651px 709px #fff, 1292px 970px #fff,
      675px 399px #fff, 344px 1439px #fff, 183px 1408px #fff, 1381px 1801px #fff,
      1007px 90px #fff, 265px 1704px #fff, 79px 634px #fff, 1626px 1839px #fff,
      1629px 131px #fff, 1864px 1574px #fff, 518px 1190px #fff, 133px 761px #fff,
      1004px 558px #fff, 289px 883px #fff, 997px 1932px #fff, 284px 714px #fff,
      1661px 1916px #fff, 833px 861px #fff, 474px 1233px #fff, 186px 114px #fff,
      1606px 975px #fff, 1046px 1858px #fff, 328px 51px #fff, 1509px 341px #fff,
      1943px 463px #fff, 1965px 898px #fff, 1673px 1610px #fff,
      1545px 1736px #fff, 1407px 1457px #fff, 539px 1669px #fff,
      449px 1448px #fff, 1220px 1837px #fff, 988px 1577px #fff,
      573px 1352px #fff, 530px 9px #fff, 972px 87px #fff, 652px 593px #fff,
      350px 1338px #fff, 1021px 582px #fff, 190px 1285px #fff, 1006px 344px #fff,
      1065px 870px #fff, 595px 1648px #fff, 317px 552px #fff, 945px 1638px #fff,
      1345px 236px #fff, 743px 1403px #fff, 554px 692px #fff, 1247px 1669px #fff,
      1570px 87px #fff, 379px 391px #fff, 644px 775px #fff, 294px 1033px #fff,
      1173px 1710px #fff, 432px 187px #fff, 259px 1897px #fff, 480px 1459px #fff,
      627px 1000px #fff, 349px 292px #fff, 700px 615px #fff, 138px 911px #fff,
      1485px 1228px #fff, 1109px 1093px #fff, 1365px 93px #fff,
      610px 1288px #fff, 104px 1380px #fff, 103px 372px #fff, 1586px 468px #fff,
      915px 981px #fff, 1629px 531px #fff, 480px 556px #fff, 979px 781px #fff,
      995px 789px #fff, 257px 1360px #fff, 1216px 1119px #fff, 679px 1626px #fff,
      449px 1451px #fff, 1241px 1524px #fff, 11px 1472px #fff, 1005px 122px #fff,
      284px 1224px #fff, 112px 988px #fff, 1614px 1810px #fff, 1584px 233px #fff,
      1205px 1821px #fff, 1116px 1424px #fff, 961px 1117px #fff,
      1073px 1280px #fff, 261px 820px #fff, 887px 151px #fff, 264px 1430px #fff,
      571px 667px #fff, 1696px 605px #fff, 36px 1706px #fff, 133px 434px #fff,
      1366px 813px #fff, 1030px 394px #fff, 1339px 709px #fff, 1344px 792px #fff,
      1255px 381px #fff, 1433px 1318px #fff, 574px 79px #fff, 1168px 779px #fff,
      1220px 1748px #fff, 463px 733px #fff, 639px 550px #fff, 1962px 1307px #fff,
      692px 1701px #fff, 420px 326px #fff, 1557px 708px #fff, 705px 181px #fff,
      1434px 1116px #fff, 606px 1024px #fff, 1733px 410px #fff,
      1169px 1714px #fff, 1635px 883px #fff, 1749px 1220px #fff,
      842px 1155px #fff, 1106px 39px #fff, 1042px 1104px #fff, 244px 1710px #fff,
      1296px 1966px #fff, 1182px 1469px #fff, 722px 125px #fff,
      916px 1499px #fff, 88px 751px #fff, 1353px 1432px #fff, 576px 716px #fff,
      1262px 1833px #fff, 88px 528px #fff, 109px 672px #fff, 955px 1945px #fff,
      382px 1731px #fff, 726px 1053px #fff, 1936px 220px #fff, 283px 794px #fff,
      1294px 1783px #fff, 255px 1109px #fff, 780px 161px #fff, 1317px 312px #fff,
      447px 1927px #fff, 1346px 1343px #fff, 1144px 877px #fff,
      1750px 831px #fff, 1048px 410px #fff, 516px 1481px #fff, 266px 1357px #fff,
      973px 655px #fff, 911px 553px #fff, 1197px 1531px #fff, 1299px 259px #fff,
      1828px 1125px #fff, 1333px 1418px #fff, 1984px 1099px #fff,
      452px 1659px #fff, 1112px 1819px #fff, 76px 740px #fff, 1546px 1764px #fff,
      5px 329px #fff, 1901px 1084px #fff, 255px 1999px #fff, 356px 292px #fff,
      784px 251px #fff, 1532px 683px #fff, 315px 329px #fff, 80px 1864px #fff,
      1134px 1709px #fff, 175px 637px #fff, 1716px 1833px #fff, 946px 844px #fff,
      1815px 1272px #fff, 1983px 1276px #fff, 1862px 1875px #fff,
      1276px 1755px #fff, 508px 802px #fff, 980px 1974px #fff, 705px 310px #fff,
      419px 795px #fff, 1294px 595px #fff, 1911px 1575px #fff, 483px 1553px #fff,
      1052px 1766px #fff, 200px 688px #fff, 471px 986px #fff, 721px 768px #fff,
      52px 262px #fff, 1031px 926px #fff, 1624px 1797px #fff, 913px 1879px #fff,
      188px 162px #fff, 350px 1299px #fff, 1129px 1942px #fff, 1117px 838px #fff,
      194px 559px #fff, 998px 287px #fff, 971px 1362px #fff, 1838px 775px #fff,
      1620px 545px #fff, 51px 1134px #fff, 1177px 660px #fff, 376px 1828px #fff,
      361px 969px #fff, 768px 1932px #fff, 28px 207px #fff, 130px 213px #fff,
      892px 838px #fff, 833px 342px #fff, 232px 1177px #fff, 266px 1027px #fff,
      1964px 287px #fff, 1684px 1023px #fff, 1899px 947px #fff,
      997px 1235px #fff, 509px 1653px #fff, 61px 1246px #fff, 1451px 1727px #fff,
      333px 1749px #fff, 782px 846px #fff, 454px 1634px #fff, 507px 1274px #fff,
      97px 1105px #fff, 195px 1902px #fff, 725px 128px #fff, 560px 710px #fff,
      1386px 1317px #fff, 1497px 1520px #fff, 1892px 355px #fff,
      363px 791px #fff, 105px 1623px #fff, 320px 1500px #fff, 333px 637px #fff,
      282px 421px #fff, 1609px 1791px #fff, 173px 92px #fff, 810px 713px #fff,
      893px 216px #fff, 1907px 1957px #fff, 282px 782px #fff, 1783px 1936px #fff,
      266px 752px #fff, 781px 1863px #fff, 666px 544px #fff, 556px 1768px #fff,
      51px 428px #fff, 1496px 1456px #fff, 121px 1918px #fff, 102px 767px #fff,
      981px 12px #fff, 1232px 1329px #fff, 6px 449px #fff, 1919px 1908px #fff,
      644px 466px #fff, 533px 1754px #fff, 547px 43px #fff, 1343px 1040px #fff,
      652px 1195px #fff, 156px 1452px #fff, 1980px 1664px #fff,
      1657px 1773px #fff, 1001px 1931px #fff, 140px 875px #fff, 860px 861px #fff,
      1087px 1098px #fff, 793px 860px #fff, 570px 204px #fff, 1810px 1909px #fff,
      866px 1626px #fff, 502px 1160px #fff, 264px 411px #fff, 178px 1786px #fff,
      424px 624px #fff, 963px 1929px #fff, 1754px 1713px #fff, 208px 89px #fff,
      905px 1953px #fff, 1062px 1004px #fff, 1871px 1229px #fff,
      1760px 390px #fff, 1826px 796px #fff, 1785px 1527px #fff,
      1377px 1046px #fff, 1970px 974px #fff, 1117px 1420px #fff,
      747px 656px #fff, 1563px 1678px #fff, 437px 403px #fff, 195px 1840px #fff,
      12px 1711px #fff, 1985px 48px #fff, 1694px 778px #fff, 113px 377px #fff,
      1663px 1446px #fff, 1497px 1156px #fff, 1717px 1190px #fff,
      1778px 19px #fff, 1669px 1739px #fff, 751px 625px #fff, 774px 251px #fff,
      461px 1106px #fff, 1932px 455px #fff, 756px 338px #fff, 1145px 1165px #fff,
      927px 848px #fff, 1906px 1109px #fff, 1537px 403px #fff, 614px 1336px #fff,
      204px 106px #fff, 411px 1176px #fff, 9px 864px #fff, 876px 1653px #fff,
      559px 415px #fff, 1151px 1206px #fff, 1004px 1644px #fff,
      1140px 1323px #fff, 677px 1603px #fff, 78px 21px #fff, 236px 1600px #fff,
      1262px 138px #fff, 1374px 931px #fff, 1540px 1808px #fff,
      793px 1976px #fff, 975px 1598px #fff, 1575px 1288px #fff,
      196px 1099px #fff, 1625px 1278px #fff, 745px 1245px #fff,
      1463px 1712px #fff, 1146px 115px #fff, 1947px 905px #fff,
      1643px 1890px #fff, 731px 1244px #fff, 490px 1156px #fff, 958px 813px #fff,
      1790px 791px #fff, 1024px 1693px #fff, 1072px 1306px #fff,
      1297px 104px #fff, 114px 308px #fff, 260px 86px #fff, 73px 154px #fff,
      334px 105px #fff, 873px 85px #fff, 292px 1242px #fff, 361px 739px #fff,
      1910px 1615px #fff, 1848px 243px #fff, 1122px 312px #fff,
      1881px 822px #fff, 1374px 1755px #fff, 1374px 93px #fff, 387px 1352px #fff,
      1741px 178px #fff, 363px 276px #fff, 1568px 1307px #fff, 64px 1958px #fff,
      306px 855px #fff, 674px 1249px #fff, 1143px 665px #fff, 830px 634px #fff,
      1016px 1433px #fff, 1695px 1453px #fff, 392px 1745px #fff,
      1611px 1983px #fff, 322px 1424px #fff, 199px 1189px #fff,
      1624px 1070px #fff, 241px 1383px #fff, 1466px 1035px #fff,
      205px 1316px #fff, 134px 1707px #fff, 1311px 989px #fff, 1703px 741px #fff,
      1037px 1229px #fff, 13px 1123px #fff, 720px 249px #fff, 1425px 86px #fff,
      1508px 194px #fff, 1597px 1950px #fff, 1136px 827px #fff, 1684px 6px #fff,
      578px 857px #fff, 1915px 781px #fff, 1371px 1018px #fff, 424px 1719px #fff,
      76px 1527px #fff, 556px 356px #fff, 1480px 1994px #fff, 1373px 1932px #fff,
      1481px 1480px #fff, 1412px 455px #fff, 448px 413px #fff, 1703px 468px #fff,
      1586px 1064px #fff, 1476px 515px #fff, 1035px 1815px #fff,
      1489px 1715px #fff, 1375px 1036px #fff, 1850px 294px #fff,
      363px 507px #fff, 1520px 1825px #fff, 1128px 646px #fff, 219px 1059px #fff,
      121px 442px #fff, 378px 879px #fff, 1320px 1080px #fff, 117px 890px #fff,
      1626px 1094px #fff, 1834px 442px #fff, 285px 1316px #fff,
      1737px 1220px #fff, 84px 512px #fff, 903px 1519px #fff, 1147px 1422px #fff,
      745px 92px #fff, 1566px 1110px #fff, 29px 768px #fff, 194px 879px #fff,
      1370px 690px #fff, 1491px 746px #fff, 1479px 674px #fff, 214px 320px #fff,
      1751px 1297px #fff, 645px 1875px #fff, 1519px 513px #fff,
      897px 1510px #fff, 1887px 1873px #fff, 1556px 415px #fff,
      700px 1931px #fff, 76px 1639px #fff, 30px 867px #fff, 907px 52px #fff,
      1297px 742px #fff, 474px 409px #fff, 1965px 1988px #fff, 43px 941px #fff,
      1998px 1513px #fff, 1508px 192px #fff, 306px 850px #fff, 841px 1521px #fff,
      761px 1022px #fff, 1184px 1000px #fff, 1249px 757px #fff,
      1186px 1826px #fff, 931px 1987px #fff, 623px 412px #fff,
      1761px 1921px #fff, 238px 399px #fff, 980px 446px #fff, 784px 1666px #fff,
      718px 139px #fff, 1355px 1963px #fff, 1380px 1960px #fff, 707px 89px #fff,
      815px 1970px #fff, 1495px 551px #fff, 1996px 1696px #fff, 939px 735px #fff,
      714px 826px #fff, 749px 1746px #fff, 1765px 1769px #fff, 1591px 515px #fff,
      369px 554px #fff, 1850px 1254px #fff, 1886px 1663px #fff,
      1856px 846px #fff, 11px 1600px #fff, 1417px 1091px #fff,
      1811px 1387px #fff, 1187px 119px #fff, 85px 191px #fff, 1976px 964px #fff,
      279px 738px #fff, 1079px 1138px #fff, 301px 89px #fff, 841px 482px #fff,
      1952px 986px #fff, 1322px 510px #fff, 281px 1727px #fff, 552px 1492px #fff,
      645px 1977px #fff, 1213px 1903px #fff, 1956px 1910px #fff,
      471px 1410px #fff, 1032px 1017px #fff, 1891px 1742px #fff,
      447px 105px #fff, 1152px 912px #fff, 1741px 933px #fff, 1067px 430px #fff,
      1567px 338px #fff, 778px 1460px #fff, 838px 449px #fff, 349px 466px #fff,
      1809px 252px #fff, 1675px 172px #fff, 1114px 902px #fff,
      1023px 1030px #fff, 656px 1221px #fff, 60px 1349px #fff, 1530px 736px #fff,
      1786px 259px #fff, 1647px 454px #fff, 414px 1532px #fff, 1452px 864px #fff,
      351px 1034px #fff, 1811px 1493px #fff, 1044px 1892px #fff,
      780px 879px #fff, 1091px 501px #fff, 1499px 987px #fff, 1422px 1037px #fff,
      210px 811px #fff, 471px 176px #fff, 1584px 1136px #fff, 1431px 44px #fff,
      1197px 1629px #fff, 625px 1025px #fff, 1353px 1533px #fff, 31px 391px #fff,
      1339px 140px #fff, 947px 1001px #fff, 1342px 18px #fff, 655px 1151px #fff,
      1221px 1491px #fff, 399px 1484px #fff, 669px 795px #fff, 1457px 953px #fff,
      552px 1555px #fff, 785px 1895px #fff, 1043px 232px #fff, 600px 236px #fff,
      1319px 1178px #fff, 803px 657px #fff, 1565px 1091px #fff,
      183px 1753px #fff, 1740px 1969px #fff, 166px 1224px #fff,
      1023px 1762px #fff, 1291px 1514px #fff, 1319px 917px #fff,
      1685px 900px #fff, 876px 724px #fff;
  }

  .stars2 {
    width: 0.2rem;
    height: 0.2rem;
    animation: animStar 100s linear infinite;
    box-shadow: 1831px 973px #fff, 657px 1097px #fff, 280px 1421px #fff,
      1472px 1172px #fff, 1606px 651px #fff, 1497px 877px #fff,
      274px 1049px #fff, 158px 1743px #fff, 1977px 301px #fff, 146px 610px #fff,
      596px 916px #fff, 1504px 286px #fff, 1070px 210px #fff, 690px 314px #fff,
      333px 1599px #fff, 374px 1965px #fff, 1397px 959px #fff, 956px 876px #fff,
      1197px 707px #fff, 379px 496px #fff, 638px 445px #fff, 1242px 1890px #fff,
      1891px 951px #fff, 188px 573px #fff, 1188px 1850px #fff, 1762px 263px #fff,
      1595px 1858px #fff, 326px 555px #fff, 651px 32px #fff, 193px 1546px #fff,
      383px 1490px #fff, 908px 973px #fff, 316px 1587px #fff, 5px 789px #fff,
      393px 945px #fff, 477px 242px #fff, 77px 1042px #fff, 1522px 1492px #fff,
      1634px 1578px #fff, 1565px 1858px #fff, 697px 928px #fff, 653px 550px #fff,
      1618px 858px #fff, 611px 392px #fff, 999px 384px #fff, 93px 1464px #fff,
      1906px 1050px #fff, 437px 1250px #fff, 1320px 441px #fff, 475px 645px #fff,
      595px 1708px #fff, 168px 412px #fff, 951px 526px #fff, 1411px 1526px #fff,
      43px 227px #fff, 393px 895px #fff, 1429px 1354px #fff, 358px 1760px #fff,
      1119px 553px #fff, 1248px 1608px #fff, 671px 1961px #fff,
      1107px 1727px #fff, 967px 289px #fff, 1857px 851px #fff, 975px 86px #fff,
      829px 252px #fff, 1776px 1676px #fff, 1305px 577px #fff,
      1840px 1716px #fff, 1813px 1217px #fff, 1616px 1187px #fff,
      843px 1004px #fff, 1044px 26px #fff, 475px 1743px #fff, 110px 1196px #fff,
      759px 1583px #fff, 361px 1492px #fff, 13px 511px #fff, 1856px 1509px #fff,
      635px 358px #fff, 877px 169px #fff, 530px 1567px #fff, 907px 778px #fff,
      1397px 902px #fff, 323px 1637px #fff, 1138px 377px #fff,
      1132px 1243px #fff, 1160px 894px #fff, 1483px 1104px #fff,
      802px 1907px #fff, 1980px 1035px #fff, 1100px 303px #fff, 569px 758px #fff,
      839px 1028px #fff, 538px 396px #fff, 434px 488px #fff, 162px 630px #fff,
      1440px 1343px #fff, 141px 1434px #fff, 1622px 1590px #fff,
      753px 953px #fff, 979px 94px #fff, 1506px 1780px #fff, 258px 753px #fff,
      1456px 1992px #fff, 1301px 808px #fff, 1818px 1780px #fff,
      18px 1740px #fff, 1584px 1608px #fff, 1049px 1430px #fff,
      1790px 1538px #fff, 1007px 371px #fff, 1724px 195px #fff,
      1998px 1928px #fff, 498px 7px #fff, 956px 1412px #fff, 755px 849px #fff,
      821px 683px #fff, 375px 866px #fff, 711px 45px #fff, 1476px 1438px #fff,
      779px 1380px #fff, 387px 1327px #fff, 201px 703px #fff, 1440px 920px #fff,
      845px 1043px #fff, 1280px 736px #fff, 279px 844px #fff, 999px 1714px #fff,
      745px 979px #fff, 370px 1110px #fff, 1955px 1924px #fff,
      1369px 1871px #fff, 1636px 1838px #fff, 1570px 1923px #fff,
      1758px 891px #fff, 1568px 455px #fff, 1580px 835px #fff, 361px 1699px #fff,
      1538px 343px #fff, 1769px 1375px #fff, 1537px 391px #fff,
      1080px 1926px #fff, 1767px 906px #fff, 256px 1510px #fff,
      1800px 219px #fff, 767px 382px #fff, 1747px 813px #fff, 898px 1833px #fff,
      807px 1224px #fff, 672px 1200px #fff, 1512px 1207px #fff,
      1843px 1777px #fff, 764px 396px #fff, 276px 407px #fff, 1464px 1551px #fff,
      849px 1125px #fff, 648px 1336px #fff, 1078px 1754px #fff, 761px 12px #fff,
      1261px 390px #fff, 1814px 609px #fff, 1896px 8px #fff, 1284px 1684px #fff,
      1872px 207px #fff, 527px 1355px #fff, 1933px 1548px #fff, 4px 202px #fff,
      1607px 1823px #fff, 1795px 239px #fff, 196px 839px #fff, 388px 1964px #fff,
      1094px 357px #fff, 1598px 511px #fff, 1219px 1591px #fff,
      1440px 539px #fff, 1772px 70px #fff, 1770px 1962px #fff, 1232px 3px #fff,
      304px 350px #fff, 1194px 1186px #fff, 21px 1735px #fff, 273px 1600px #fff,
      1286px 717px #fff, 253px 1795px #fff, 256px 625px #fff, 1481px 1837px #fff,
      438px 97px #fff, 1047px 1664px #fff, 1010px 1174px #fff, 1421px 224px #fff,
      911px 629px #fff, 827px 1631px #fff, 1350px 50px #fff, 852px 1229px #fff,
      1359px 1863px #fff, 1527px 1102px #fff, 759px 1290px #fff,
      709px 1064px #fff, 663px 618px #fff;
  }

  .stars3 {
    width: 0.3rem;
    height: 0.3rem;
    animation: animStar 150s linear infinite;
    box-shadow: 1114px 1473px #fff, 733px 1903px #fff, 865px 162px #fff,
      1647px 1916px #fff, 544px 472px #fff, 1623px 1405px #fff,
      218px 1036px #fff, 1392px 1030px #fff, 135px 1952px #fff,
      663px 1383px #fff, 956px 1417px #fff, 449px 1417px #fff, 1959px 968px #fff,
      1591px 1603px #fff, 750px 1643px #fff, 672px 255px #fff,
      1708px 1871px #fff, 1474px 1716px #fff, 1101px 1543px #fff,
      620px 629px #fff, 192px 1662px #fff, 568px 722px #fff, 1527px 971px #fff,
      1316px 145px #fff, 355px 1114px #fff, 661px 1830px #fff, 297px 1448px #fff,
      1896px 915px #fff, 1037px 1748px #fff, 1838px 1402px #fff,
      1175px 296px #fff, 1825px 605px #fff, 310px 50px #fff, 1035px 504px #fff,
      978px 714px #fff, 976px 732px #fff, 716px 1840px #fff, 637px 1477px #fff,
      1076px 1688px #fff, 1465px 1706px #fff, 60px 951px #fff, 404px 362px #fff,
      687px 838px #fff, 945px 933px #fff, 1727px 1367px #fff, 1640px 718px #fff,
      1563px 1199px #fff, 1643px 1689px #fff, 877px 978px #fff,
      1124px 469px #fff, 1944px 1929px #fff, 718px 1825px #fff,
      836px 1461px #fff, 653px 1737px #fff, 704px 942px #fff, 292px 247px #fff,
      828px 449px #fff, 1026px 1305px #fff, 1922px 306px #fff, 629px 1499px #fff,
      1445px 1061px #fff, 529px 201px #fff, 1966px 425px #fff, 946px 1074px #fff,
      852px 585px #fff, 1694px 1024px #fff, 1549px 558px #fff, 384px 828px #fff,
      1266px 662px #fff, 1417px 642px #fff, 447px 772px #fff, 489px 1307px #fff,
      1223px 1090px #fff, 340px 1287px #fff, 967px 1200px #fff,
      1376px 444px #fff, 6px 1640px #fff, 1984px 1808px #fff, 1734px 1292px #fff,
      276px 144px #fff, 1689px 1706px #fff, 1343px 632px #fff, 688px 1903px #fff,
      568px 1533px #fff, 1380px 1590px #fff, 205px 457px #fff,
      1930px 1818px #fff, 146px 591px #fff, 973px 70px #fff, 155px 1612px #fff,
      1272px 909px #fff, 46px 1628px #fff, 1199px 1861px #fff, 813px 552px #fff,
      298px 1145px #fff, 330px 1826px #fff, 632px 531px #fff, 1807px 1523px #fff,
      607px 607px #fff, 1419px 504px #fff;
  }

  .intro {
    position: relative;
    z-index: 4;
    color: #fff;
    user-select: none;
    max-width: 100%;
    padding: 0 2rem;

    @media (max-width: 1999.98px) {
      transform: translate(2rem, 45rem);
    }

    @media (max-width: 991.98px) {
      top: 50%;
      left: 1rem;
      transform: translateY(-50%);
    }

    @media (min-width: 1200px) {
      transform: translate(25rem, 45rem);
    }

    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {
      top: 50%;
      left: 1rem;
      transform: translateY(-50%);
    }

    h1 {
      font-size: 3.5rem;
      font-weight: bold;
      word-wrap: break-word;

      @media (max-width: 399.98px) {
        font-size: 3rem;
      }
    }

    p {
      font-size: 2rem;
      margin: 3rem 0;
    }

    button {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0 1rem;
      font-size: 2rem;
      padding: 0.5rem 3.5rem;
      border-radius: 2.5rem;
      border: none;
      background-color: #fbce09;
      transition: all 0.3s ease;

      &:hover {
        background: #faae27;
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      }

      &:active {
        transform: translateY(-1px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
      }

      &::after {
        content: "";
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 100px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transition: all 0.4s;
        background-color: #fbce09;
      }

      &:hover {
        &::after {
          transform: scaleX(1.4) scaleY(1.6);
          opacity: 0;
        }
      }

      i {
        // transform: translateX(2rem);
        animation: moveArrow 1s ease alternate infinite;
      }
    }
  }

  .chevron_down {
    position: absolute;
    bottom: -4.5rem;
    left: 49%;
    transform: translate(-50%, -50%);
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    background: #faae27;
    z-index: 4;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    .chevron {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      i {
        font-size: 2rem;
        color: #fff;
        animation: moveArrowUp 1.5s ease infinite alternate;
      }
    }

    &::after,
    &::before {
      content: "";
      display: inline-block;
      height: 100%;
      width: 100%;
      border-radius: 50%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      transition: all 0.4s;
      background-color: transparent;
      border: 1px solid #fbce09;
      animation: waveEffect 2s ease infinite;
    }

    &::before {
      animation: waveEffect 2s ease infinite;
      animation-delay: 0.5s;
    }
  }
}

@keyframes animStar {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-100rem);
  }
}

@keyframes moveArrow {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(10px);
  }
}

@keyframes moveArrowUp {
  0% {
    transform: translateY(-0.5rem);
  }

  100% {
    transform: translateY(1.5rem);
  }
}

@keyframes waveEffect {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(1.6);
    opacity: 0;
  }
}
</style>
