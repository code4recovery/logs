# Access Log Parser

Parses and sorts referrer domains from an access log to get a periodic survey of who's using TSML UI

```bash
scp forge@code4recovery.org:/var/log/nginx/tsml-ui.code4recovery.org-access.log.1 ./tsml-ui.log
npm i
npm start
```

Top sites as of 2024-10-19:

```js
{
  'recoverydharma.org' => 1308,
  'aasfmarin.org' => 697,
  'oc-aa.org' => 566,
  'nycalanon.org' => 542,
  'seattleaa.org' => 475,
  'crystalmeth.org' => 446,
  'aasepia.org' => 438,
  'aatoronto.org' => 404,
  'aavirginia.org' => 373,
  'aajapan-online-intergroup.org' => 348,
  'austinaa.org' => 336,
  'vancouveraa.ca' => 336,
  'eastbayaa.org' => 331,
  'daccaa.org' => 328,
  'm.aa87.org' => 314,
  'baltimoreaa.org' => 275,
  'ncsandiegoaa.org' => 271,
  'cascotland.org.uk' => 262,
  'meetings.aa-quebec.org' => 253,
  'al-anon.org.au' => 251,
  'meetingfinderstorage.z13.web.core.windows.net' => 241,
  'aanashville.org' => 228,
  'aanorthcarolina.org' => 227,
  'loukyaa.org' => 216,
  'codauk.org' => 213,
  'atlantaaa.org' => 212,
  'oahuaa.org' => 201,
  'aa-semi.org' => 188,
  'aainlandempire.org' => 183,
  'aacentralohio.org' => 182,
  'aaventuracounty.org' => 178,
  'buffaloaany.org' => 178,
  'rhodeisland-aa.org' => 170,
  'ca-online.org' => 163,
  'aasj.org' => 160,
  'aastl.org' => 159,
  'underearnersanonymous.org' => 159,
  'aasantacruz.org' => 155,
  'idahoarea18aa.org' => 142,
  'ca-sweden.se' => 140,
  'cflintergroup.org' => 139,
  'lancasteraa.org' => 138,
  'albuquerqueaa.org' => 136,
  'nassauintergroup.org' => 136,
  'neflaa.org' => 131,
  'aarichmond.org' => 131,
  'area72aa.org' => 129,
  'aacincinnati.org' => 127,
  'eana.ca' => 127,
  'sloaa.org' => 110,
  'pa-al-anon.org' => 109,
  'hacoaa.org' => 108,
  'fresnoaa.org' => 105,
  'aa-kco.org' => 105,
  'coloradospringsaa.org' => 100,
}
```
