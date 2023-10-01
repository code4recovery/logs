# Access Log Parser

Parses and sorts referrer domains from an access log to get a periodic survey of who's using TSML UI

You may need to install ts-node globally:

```bash
$ npm install -g ts-node
```

Then run:

```bash
$ scp forge@code4recovery.org:/var/log/nginx/tsml-ui.code4recovery.org-access.log.1 ./tsml-ui.log
$ ts-node index.ts
```

Top sites as of 2023-10-01:

```js
{
  'aasfmarin.org' => 870,
  'nycalanon.org' => 537,
  'oc-aa.org' => 510,
  'aasanjose.org' => 469,
  'eastbayaa.org' => 397,
  'daccaa.org' => 383,
  'eatingdisordersanonymous.org' => 322,
  'aajapan-online-intergroup.org' => 309,
  'aavirginia.org' => 286,
  'aatoronto.org' => 268,
  'ncsandiegoaa.org' => 266,
  'loukyaa.org' => 247,
  'vancouveraa.ca' => 247,
  'baltimoreaa.org' => 241,
  'aasantacruz.org' => 201,
  'oahuaa.org' => 195,
  'area78aa.org' => 180,
  'aaventuracounty.org' => 157,
  'aacentralohio.org' => 155,
  'rhodeisland-aa.org' => 155,
  'buffaloaany.org' => 154,
  'area72aa.org' => 138,
  'neflaa.org' => 138,
  'fortworthaa.org' => 137,
  'danyc.org' => 137,
  'fresnoaa.org' => 126,
  'eana.ca' => 124,
  'sloaa.org' => 121,
  'ca-sweden.se' => 108,
  'santabarbaraaa.com' => 101,
  'aaharrisburg.org' => 91,
  'aamonterey.org' => 83,
  'aalv.org' => 80,
  'nassauintergroup.org' => 80,
  'nassauaa.org' => 79,
}
```
