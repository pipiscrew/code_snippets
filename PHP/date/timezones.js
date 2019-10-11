<?php
/**
 * Time Zones
 *
 * @version    0.1 (2017-03-01 08:13:00 GMT)
 * @author     Peter Kahl <peter.kahl@colossalmind.com>
 * @copyright  2015-2017 Peter Kahl
 * @license    Apache License, Version 2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      <http://www.apache.org/licenses/LICENSE-2.0>
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class timeZones {

  /**
   * Version
   * @var string
   */
  const VERSION = '0.1';

  #===================================================================

  public static function getZones() {
    return self::$list;
  }

  #===================================================================

  public static function validZone($str) {
    return array_key_exists($str, self::$list);
  }

  #===================================================================

  private static $list = array(
    'Pacific/Midway'                 => '(UTC-11:00) Midway',
    'Pacific/Niue'                   => '(UTC-11:00) Niue',
    'Pacific/Pago_Pago'              => '(UTC-11:00) Pago Pago',

    'America/Adak'                   => '(UTC-10:00) Adak',
    'Pacific/Honolulu'               => '(UTC-10:00) Honolulu',
    'Pacific/Johnston'               => '(UTC-10:00) Johnston Atoll',
    'Pacific/Rarotonga'              => '(UTC-10:00) Rarotonga, Cook Islands',
    'Pacific/Tahiti'                 => '(UTC-10:00) Tahiti',

    'America/Anchorage'              => '(UTC-09:00) Anchorage',
    'Pacific/Gambier'                => '(UTC-09:00) Gambier',
    'America/Juneau'                 => '(UTC-09:00) Juneau',
    'Pacific/Marquesas'              => '(UTC-09:00) Marquesas',
    'America/Nome'                   => '(UTC-09:00) Nome',
    'America/Sitka'                  => '(UTC-09:00) Sitka',
    'America/Yakutat'                => '(UTC-09:00) Yakutat',

    'America/Dawson'                 => '(UTC-08:00) Dawson, OR, USA',
    'America/Los_Angeles'            => '(UTC-08:00) Los Angeles',
    'America/Metlakatla'             => '(UTC-08:00) Metlakatla',
    'Pacific/Pitcairn'               => '(UTC-08:00) Pitcairn',
    'America/Santa_Isabel'           => '(UTC-08:00) Santa Isabel',
    'America/Tijuana'                => '(UTC-08:00) Tijuana, Mexico',
    'America/Vancouver'              => '(UTC-08:00) Vancouver, Canada',
    'America/Whitehorse'             => '(UTC-08:00) Whitehorse',

    'America/Boise'                  => '(UTC-07:00) Boise, Idaho',
    'America/Cambridge_Bay'          => '(UTC-07:00) Cambridge Bay',
    'America/Chihuahua'              => '(UTC-07:00) Chihuahua',
    'America/Creston'                => '(UTC-07:00) Creston',
    'America/Dawson_Creek'           => '(UTC-07:00) Dawson Creek, BC, Canada',
    'America/Denver'                 => '(UTC-07:00) Denver, Colorado',
    'America/Edmonton'               => '(UTC-07:00) Edmonton, Canada',
    'America/Fort_Nelson'            => '(UTC-07:00) Fort Nelson',
    'America/Hermosillo'             => '(UTC-07:00) Hermosillo',
    'America/Inuvik'                 => '(UTC-07:00) Inuvik',
    'America/Mazatlan'               => '(UTC-07:00) Mazatlan',
    'America/Ojinaga'                => '(UTC-07:00) Ojinaga',
    'America/Phoenix'                => '(UTC-07:00) Phoenix, Arizona',
    'America/Yellowknife'            => '(UTC-07:00) Yellowknife',

    'America/Bahia_Banderas'         => '(UTC-06:00) Bahia Banderas',
    'America/Belize'                 => '(UTC-06:00) Belize',
    'America/North_Dakota/Beulah'    => '(UTC-06:00) Beulah, North Dakota',
    'America/North_Dakota/Center'    => '(UTC-06:00) Center, North Dakota',
    'America/Chicago'                => '(UTC-06:00) Chicago, Illinois',
    'America/Costa_Rica'             => '(UTC-06:00) Costa Rica',
    'America/El_Salvador'            => '(UTC-06:00) El Salvador',
    'Pacific/Galapagos'              => '(UTC-06:00) Galapagos',
    'America/Guatemala'              => '(UTC-06:00) Guatemala',
    'America/Indiana/Knox'           => '(UTC-06:00) Knox, Indiana',
    'America/Managua'                => '(UTC-06:00) Managua',
    'America/Matamoros'              => '(UTC-06:00) Matamoros',
    'America/Menominee'              => '(UTC-06:00) Menominee',
    'America/Merida'                 => '(UTC-06:00) Merida',
    'America/Mexico_City'            => '(UTC-06:00) Mexico City',
    'America/Monterrey'              => '(UTC-06:00) Monterrey, Mexico',
    'America/North_Dakota/New_Salem' => '(UTC-06:00) New Salem, North Dakota',
    'America/Rainy_River'            => '(UTC-06:00) Rainy River, Ontario, Canada',
    'America/Rankin_Inlet'           => '(UTC-06:00) Rankin Inlet, Nunavut, Canada',
    'America/Regina'                 => '(UTC-06:00) Regina, Saskatchewan',
    'America/Resolute'               => '(UTC-06:00) Resolute, Nunavut, Canada',
    'America/Swift_Current'          => '(UTC-06:00) Swift Current, Saskatchewan',
    'America/Tegucigalpa'            => '(UTC-06:00) Tegucigalpa',
    'America/Indiana/Tell_City'      => '(UTC-06:00) Tell City, Indiana',
    'America/Winnipeg'               => '(UTC-06:00) Winnipeg',

    'America/Atikokan'               => '(UTC-05:00) Atikokan',
    'America/Bogota'                 => '(UTC-05:00) Bogota',
    'America/Cancun'                 => '(UTC-05:00) Cancun',
    'America/Cayman'                 => '(UTC-05:00) Cayman Islands',
    'America/Detroit'                => '(UTC-05:00) Detroit, Michigan',
    'Pacific/Easter'                 => '(UTC-05:00) Easter Island, Chile',
    'America/Eirunepe'               => '(UTC-05:00) Eirunepe',
    'America/Guayaquil'              => '(UTC-05:00) Guayaquil',
    'America/Havana'                 => '(UTC-05:00) Havana, Cuba',
    'America/Indiana/Indianapolis'   => '(UTC-05:00) Indianapolis, Indiana',
    'America/Iqaluit'                => '(UTC-05:00) Iqaluit, Nunavut, Canada',
    'America/Jamaica'                => '(UTC-05:00) Jamaica',
    'America/Lima'                   => '(UTC-05:00) Lima, Peru',
    'America/Kentucky/Louisville'    => '(UTC-05:00) Louisville, Kentucky',
    'America/Indiana/Marengo'        => '(UTC-05:00) Marengo, Indiana',
    'America/Kentucky/Monticello'    => '(UTC-05:00) Monticello, Kentucky',
    'America/Nassau'                 => '(UTC-05:00) Nassau, Bahamas',
    'America/New_York'               => '(UTC-05:00) New York',
    'America/Nipigon'                => '(UTC-05:00) Nipigon',
    'America/Panama'                 => '(UTC-05:00) Panama',
    'America/Pangnirtung'            => '(UTC-05:00) Pangnirtung',
    'America/Indiana/Petersburg'     => '(UTC-05:00) Petersburg, Indiana',
    'America/Port-au-Prince'         => '(UTC-05:00) Port-au-Prince',
    'America/Rio_Branco'             => '(UTC-05:00) Rio Branco',
    'America/Thunder_Bay'            => '(UTC-05:00) Thunder Bay, Ontario, Canada',
    'America/Toronto'                => '(UTC-05:00) Toronto',
    'America/Indiana/Vevay'          => '(UTC-05:00) Vevay, Indiana',
    'America/Indiana/Vincennes'      => '(UTC-05:00) Vincennes, Indiana',
    'America/Indiana/Winamac'        => '(UTC-05:00) Winamac, Indiana',

    'America/Anguilla'               => '(UTC-04:00) Anguilla',
    'America/Antigua'                => '(UTC-04:00) Antigua',
    'America/Aruba'                  => '(UTC-04:00) Aruba',
    'America/Barbados'               => '(UTC-04:00) Barbados',
    'Atlantic/Bermuda'               => '(UTC-04:00) Bermuda',
    'America/Blanc-Sablon'           => '(UTC-04:00) Blanc-Sablon',
    'America/Boa_Vista'              => '(UTC-04:00) Boa Vista',
    'America/Caracas'                => '(UTC-04:00) Caracas',
    'America/Curacao'                => '(UTC-04:00) Curacao',
    'America/Dominica'               => '(UTC-04:00) Dominica',
    'America/Glace_Bay'              => '(UTC-04:00) Glace Bay',
    'America/Goose_Bay'              => '(UTC-04:00) Goose Bay',
    'America/Grand_Turk'             => '(UTC-04:00) Grand Turk',
    'America/Grenada'                => '(UTC-04:00) Grenada',
    'America/Guadeloupe'             => '(UTC-04:00) Guadeloupe',
    'America/Guyana'                 => '(UTC-04:00) Guyana',
    'America/Halifax'                => '(UTC-04:00) Halifax',
    'America/Kralendijk'             => '(UTC-04:00) Kralendijk',
    'America/La_Paz'                 => '(UTC-04:00) La Paz, Bolivia',
    'America/Lower_Princes'          => '(UTC-04:00) Lower Princes',
    'America/Manaus'                 => '(UTC-04:00) Manaus',
    'America/Marigot'                => '(UTC-04:00) Marigot',
    'America/Martinique'             => '(UTC-04:00) Martinique',
    'America/Moncton'                => '(UTC-04:00) Moncton',
    'America/Montserrat'             => '(UTC-04:00) Montserrat',
    'America/Port_of_Spain'          => '(UTC-04:00) Port of Spain',
    'America/Porto_Velho'            => '(UTC-04:00) Porto Velho',
    'America/Puerto_Rico'            => '(UTC-04:00) San Juan, Puerto Rico',
    'America/Santo_Domingo'          => '(UTC-04:00) Santo Domingo, Dominican Republic',
    'America/St_Barthelemy'          => '(UTC-04:00) Saint Barthelemy',
    'America/St_Kitts'               => '(UTC-04:00) Saint Kitts',
    'America/St_Lucia'               => '(UTC-04:00) Saint Lucia',
    'America/St_Thomas'              => '(UTC-04:00) Saint Thomas, U.S. Virgin Islands',
    'America/St_Vincent'             => '(UTC-04:00) Saint Vincent, Saint Vincent and the Grenadines',
    'America/Thule'                  => '(UTC-04:00) Thule, Greenland',
    'America/Tortola'                => '(UTC-04:00) Tortola, British Virgin Islands',

    'America/Araguaina'              => '(UTC-03:00) Araguaina',
    'America/Asuncion'               => '(UTC-03:00) Asuncion',
    'America/Bahia'                  => '(UTC-03:00) Bahia',
    'America/Belem'                  => '(UTC-03:00) Belem',
    'America/Argentina/Buenos_Aires' => '(UTC-03:00) Buenos Aires, Argentina',
    'America/Campo_Grande'           => '(UTC-03:00) Campo Grande',
    'America/Argentina/Catamarca'    => '(UTC-03:00) Catamarca, Argentina',
    'America/Cayenne'                => '(UTC-03:00) Cayenne',
    'America/Argentina/Cordoba'      => '(UTC-03:00) Cordoba, Argentina',
    'America/Cuiaba'                 => '(UTC-03:00) Cuiaba',
    'America/Fortaleza'              => '(UTC-03:00) Fortaleza',
    'America/Godthab'                => '(UTC-03:00) Godthab',
    'America/Argentina/Jujuy'        => '(UTC-03:00) Jujuy, Argentina',
    'America/Argentina/La_Rioja'     => '(UTC-03:00) La Rioja, Argentina',
    'America/Maceio'                 => '(UTC-03:00) Maceio',
    'America/Argentina/Mendoza'      => '(UTC-03:00) Mendoza, Argentina',
    'America/Miquelon'               => '(UTC-03:00) Miquelon',
    'America/Montevideo'             => '(UTC-03:00) Montevideo',
    'Antarctica/Palmer'              => '(UTC-03:00) Palmer',
    'America/Paramaribo'             => '(UTC-03:00) Paramaribo',
    'America/Recife'                 => '(UTC-03:00) Recife',
    'America/Argentina/Rio_Gallegos' => '(UTC-03:00) Rio Gallegos, Argentina',
    'Antarctica/Rothera'             => '(UTC-03:00) Rothera',
    'America/St_Johns'               => '(UTC-03:00) Saint John\'s, Antigua and Barbuda',
    'America/Argentina/Salta'        => '(UTC-03:00) Salta, Argentina',
    'America/Argentina/San_Juan'     => '(UTC-03:00) San Juan, Argentina',
    'America/Argentina/San_Luis'     => '(UTC-03:00) San Luis, Argentina',
    'America/Santarem'               => '(UTC-03:00) Santarem',
    'America/Santiago'               => '(UTC-03:00) Santiago, Chile',
    'Atlantic/Stanley'               => '(UTC-03:00) Stanley, New Brunswick, Canada',
    'America/Argentina/Tucuman'      => '(UTC-03:00) Tucuman, Argentina',
    'America/Argentina/Ushuaia'      => '(UTC-03:00) Ushuaia, Argentina',

    'America/Noronha'                => '(UTC-02:00) Noronha, Brazil',
    'America/Sao_Paulo'              => '(UTC-02:00) Sao Paulo, Brazil',
    'Atlantic/South_Georgia'         => '(UTC-02:00) South Georgia Island, South Georgia and the South Sandwich Islands',

    'Atlantic/Azores'                => '(UTC-01:00) Azores, Portugal',
    'Atlantic/Cape_Verde'            => '(UTC-01:00) Cape Verde',
    'America/Scoresbysund'           => '(UTC-01:00) Scoresbysund',

    'Africa/Abidjan'                 => '(UTC) Abidjan',
    'Africa/Accra'                   => '(UTC) Accra',
    'Africa/Bamako'                  => '(UTC) Bamako',
    'Africa/Banjul'                  => '(UTC) Banjul',
    'Africa/Bissau'                  => '(UTC) Bissau',
    'Atlantic/Canary'                => '(UTC) Canary Islands, Spain',
    'Africa/Casablanca'              => '(UTC) Casablanca',
    'Africa/Conakry'                 => '(UTC) Conakry',
    'Africa/Dakar'                   => '(UTC) Dakar',
    'Europe/Dublin'                  => '(UTC) Dublin',
    'Africa/El_Aaiun'                => '(UTC) El Aaiun',
    'Atlantic/Faroe'                 => '(UTC) Faroe',
    'Africa/Freetown'                => '(UTC) Freetown',
    'Europe/Guernsey'                => '(UTC) Guernsey',
    'Europe/Isle_of_Man'             => '(UTC) Isle of Man',
    'Europe/Jersey'                  => '(UTC) Jersey',
    'Europe/Lisbon'                  => '(UTC) Lisbon',
    'Africa/Lome'                    => '(UTC) Lome',
    'Europe/London'                  => '(UTC) London',
    'Atlantic/Madeira'               => '(UTC) Madeira',
    'Africa/Monrovia'                => '(UTC) Monrovia',
    'Africa/Nouakchott'              => '(UTC) Nouakchott',
    'Africa/Ouagadougou'             => '(UTC) Ouagadougou',
    'Atlantic/Reykjavik'             => '(UTC) Reykjavik',
    'Africa/Sao_Tome'                => '(UTC) Sao Tome, São Tomé and Príncipe',
    'Atlantic/St_Helena'             => '(UTC) Saint Helena, Ascension and Tristan da Cunha',
    'Antarctica/Troll'               => '(UTC) Troll',

    'Africa/Algiers'                 => '(UTC+01:00) Algiers',
    'Europe/Amsterdam'               => '(UTC+01:00) Amsterdam',
    'Europe/Andorra'                 => '(UTC+01:00) Andorra',
    'Africa/Bangui'                  => '(UTC+01:00) Bangui',
    'Europe/Belgrade'                => '(UTC+01:00) Belgrade',
    'Europe/Berlin'                  => '(UTC+01:00) Berlin',
    'Europe/Bratislava'              => '(UTC+01:00) Bratislava',
    'Africa/Brazzaville'             => '(UTC+01:00) Brazzaville',
    'Europe/Brussels'                => '(UTC+01:00) Brussels',
    'Europe/Budapest'                => '(UTC+01:00) Budapest',
    'Europe/Busingen'                => '(UTC+01:00) Busingen',
    'Africa/Ceuta'                   => '(UTC+01:00) Ceuta',
    'Europe/Copenhagen'              => '(UTC+01:00) Copenhagen',
    'Africa/Douala'                  => '(UTC+01:00) Douala',
    'Europe/Gibraltar'               => '(UTC+01:00) Gibraltar',
    'Africa/Kinshasa'                => '(UTC+01:00) Kinshasa',
    'Africa/Lagos'                   => '(UTC+01:00) Lagos',
    'Africa/Libreville'              => '(UTC+01:00) Libreville',
    'Europe/Ljubljana'               => '(UTC+01:00) Ljubljana',
    'Arctic/Longyearbyen'            => '(UTC+01:00) Longyearbyen',
    'Africa/Luanda'                  => '(UTC+01:00) Luanda',
    'Europe/Luxembourg'              => '(UTC+01:00) Luxembourg',
    'Europe/Madrid'                  => '(UTC+01:00) Madrid',
    'Africa/Malabo'                  => '(UTC+01:00) Malabo',
    'Europe/Malta'                   => '(UTC+01:00) Malta',
    'Europe/Monaco'                  => '(UTC+01:00) Monaco',
    'Africa/Ndjamena'                => '(UTC+01:00) N\'Djamena',
    'Africa/Niamey'                  => '(UTC+01:00) Niamey',
    'Europe/Oslo'                    => '(UTC+01:00) Oslo',
    'Europe/Paris'                   => '(UTC+01:00) Paris',
    'Europe/Podgorica'               => '(UTC+01:00) Podgorica, Montenegro',
    'Africa/Porto-Novo'              => '(UTC+01:00) Porto-Novo',
    'Europe/Prague'                  => '(UTC+01:00) Prague',
    'Europe/Rome'                    => '(UTC+01:00) Rome',
    'Europe/San_Marino'              => '(UTC+01:00) San Marino',
    'Europe/Sarajevo'                => '(UTC+01:00) Sarajevo',
    'Europe/Skopje'                  => '(UTC+01:00) Skopje',
    'Europe/Stockholm'               => '(UTC+01:00) Stockholm',
    'Europe/Tirane'                  => '(UTC+01:00) Tirane, Albania',
    'Africa/Tunis'                   => '(UTC+01:00) Tunis',
    'Europe/Vaduz'                   => '(UTC+01:00) Vaduz',
    'Europe/Vatican'                 => '(UTC+01:00) Vatican',
    'Europe/Vienna'                  => '(UTC+01:00) Vienna',
    'Europe/Warsaw'                  => '(UTC+01:00) Warsaw',
    'Europe/Zagreb'                  => '(UTC+01:00) Zagreb',
    'Europe/Zurich'                  => '(UTC+01:00) Zurich',

    'Asia/Amman'                     => '(UTC+02:00) Amman',
    'Europe/Athens'                  => '(UTC+02:00) Athens, Greece',
    'Asia/Beirut'                    => '(UTC+02:00) Beirut',
    'Africa/Blantyre'                => '(UTC+02:00) Blantyre',
    'Europe/Bucharest'               => '(UTC+02:00) Bucharest',
    'Africa/Bujumbura'               => '(UTC+02:00) Bujumbura',
    'Africa/Cairo'                   => '(UTC+02:00) Cairo',
    'Europe/Chisinau'                => '(UTC+02:00) Chisinau',
    'Asia/Damascus'                  => '(UTC+02:00) Damascus',
    'Africa/Gaborone'                => '(UTC+02:00) Gaborone',
    'Asia/Gaza'                      => '(UTC+02:00) Gaza, Palestine',
    'Africa/Harare'                  => '(UTC+02:00) Harare',
    'Asia/Hebron'                    => '(UTC+02:00) Hebron, Palestine',
    'Europe/Helsinki'                => '(UTC+02:00) Helsinki',
    'Asia/Jerusalem'                 => '(UTC+02:00) Jerusalem',
    'Africa/Johannesburg'            => '(UTC+02:00) Johannesburg',
    'Europe/Kaliningrad'             => '(UTC+02:00) Kaliningrad',
    'Europe/Kiev'                    => '(UTC+02:00) Kiev',
    'Africa/Kigali'                  => '(UTC+02:00) Kigali',
    'Africa/Lubumbashi'              => '(UTC+02:00) Lubumbashi',
    'Africa/Lusaka'                  => '(UTC+02:00) Lusaka',
    'Africa/Maputo'                  => '(UTC+02:00) Maputo',
    'Europe/Mariehamn'               => '(UTC+02:00) Mariehamn',
    'Africa/Maseru'                  => '(UTC+02:00) Maseru',
    'Asia/Nicosia'                   => '(UTC+02:00) Nicosia',
    'Africa/Mbabane'                 => '(UTC+02:00) Mbabane',
    'Europe/Riga'                    => '(UTC+02:00) Riga',
    'Europe/Sofia'                   => '(UTC+02:00) Sofia',
    'Europe/Tallinn'                 => '(UTC+02:00) Tallinn',
    'Africa/Tripoli'                 => '(UTC+02:00) Tripoli',
    'Europe/Uzhgorod'                => '(UTC+02:00) Uzhgorod',
    'Europe/Vilnius'                 => '(UTC+02:00) Vilnius',
    'Africa/Windhoek'                => '(UTC+02:00) Windhoek',
    'Europe/Zaporozhye'              => '(UTC+02:00) Zaporozhye',

    'Africa/Addis_Ababa'             => '(UTC+03:00) Addis Ababa',
    'Asia/Aden'                      => '(UTC+03:00) Aden',
    'Indian/Antananarivo'            => '(UTC+03:00) Antananarivo',
    'Africa/Asmara'                  => '(UTC+03:00) Asmara',
    'Asia/Baghdad'                   => '(UTC+03:00) Baghdad',
    'Asia/Bahrain'                   => '(UTC+03:00) Bahrain',
    'Indian/Comoro'                  => '(UTC+03:00) Comoro',
    'Africa/Dar_es_Salaam'           => '(UTC+03:00) Dar es Salaam',
    'Africa/Djibouti'                => '(UTC+03:00) Djibouti',
    'Europe/Istanbul'                => '(UTC+03:00) Istanbul',
    'Africa/Juba'                    => '(UTC+03:00) Juba',
    'Africa/Kampala'                 => '(UTC+03:00) Kampala',
    'Africa/Khartoum'                => '(UTC+03:00) Khartoum',
    'Asia/Kuwait'                    => '(UTC+03:00) Kuwait',
    'Indian/Mayotte'                 => '(UTC+03:00) Mayotte',
    'Europe/Minsk'                   => '(UTC+03:00) Minsk',
    'Africa/Mogadishu'               => '(UTC+03:00) Mogadishu',
    'Europe/Moscow'                  => '(UTC+03:00) Moscow',
    'Africa/Nairobi'                 => '(UTC+03:00) Nairobi',
    'Asia/Qatar'                     => '(UTC+03:00) Qatar',
    'Asia/Riyadh'                    => '(UTC+03:00) Riyadh',
    'Europe/Simferopol'              => '(UTC+03:00) Simferopol',
    'Antarctica/Syowa'               => '(UTC+03:00) Syowa',
    'Asia/Tehran'                    => '(UTC+03:00) Tehran',
    'Europe/Volgograd'               => '(UTC+03:00) Volgograd',

    'Asia/Baku'                      => '(UTC+04:00) Baku',
    'Asia/Dubai'                     => '(UTC+04:00) Dubai',
    'Asia/Kabul'                     => '(UTC+04:00) Kabul',
    'Indian/Mahe'                    => '(UTC+04:00) Mahe',
    'Indian/Mauritius'               => '(UTC+04:00) Mauritius',
    'Asia/Muscat'                    => '(UTC+04:00) Muscat',
    'Indian/Reunion'                 => '(UTC+04:00) Reunion',
    'Europe/Samara'                  => '(UTC+04:00) Samara',
    'Asia/Tbilisi'                   => '(UTC+04:00) Tbilisi',
    'Asia/Yerevan'                   => '(UTC+04:00) Yerevan',

    'Asia/Aqtau'                     => '(UTC+05:00) Aqtau',
    'Asia/Aqtobe'                    => '(UTC+05:00) Aqtobe',
    'Asia/Ashgabat'                  => '(UTC+05:00) Ashgabat',
    'Asia/Colombo'                   => '(UTC+05:00) Colombo',
    'Asia/Dushanbe'                  => '(UTC+05:00) Dushanbe',
    'Asia/Kathmandu'                 => '(UTC+05:00) Kathmandu',
    'Asia/Karachi'                   => '(UTC+05:00) Karachi',
    'Indian/Kerguelen'               => '(UTC+05:00) Kerguelen',
    'Asia/Kolkata'                   => '(UTC+05:00) Kolkata',
    'Indian/Maldives'                => '(UTC+05:00) Maldives',
    'Antarctica/Mawson'              => '(UTC+05:00) Mawson',
    'Asia/Oral'                      => '(UTC+05:00) Oral',
    'Asia/Samarkand'                 => '(UTC+05:00) Samarkand',
    'Asia/Tashkent'                  => '(UTC+05:00) Tashkent',
    'Asia/Yekaterinburg'             => '(UTC+05:00) Yekaterinburg',

    'Asia/Almaty'                    => '(UTC+06:00) Almaty',
    'Asia/Bishkek'                   => '(UTC+06:00) Bishkek',
    'Indian/Chagos'                  => '(UTC+06:00) Chagos',
    'Indian/Cocos'                   => '(UTC+06:00) Cocos Islands',
    'Asia/Dhaka'                     => '(UTC+06:00) Dhaka',
    'Asia/Novosibirsk'               => '(UTC+06:00) Novosibirsk',
    'Asia/Omsk'                      => '(UTC+06:00) Omsk',
    'Asia/Qyzylorda'                 => '(UTC+06:00) Qyzylorda',
    'Asia/Rangoon'                   => '(UTC+06:00) Rangoon',
    'Asia/Thimphu'                   => '(UTC+06:00) Thimphu',
    'Asia/Urumqi'                    => '(UTC+06:00) Urumqi',
    'Antarctica/Vostok'              => '(UTC+06:00) Vostok',

    'Asia/Bangkok'                   => '(UTC+07:00) Bangkok',
    'Indian/Christmas'               => '(UTC+07:00) Christmas Island',
    'Antarctica/Davis'               => '(UTC+07:00) Davis Station, Antarctica',
    'Asia/Ho_Chi_Minh'               => '(UTC+07:00) Ho Chi Minh City',
    'Asia/Hovd'                      => '(UTC+07:00) Khovd, Mongolia',
    'Asia/Jakarta'                   => '(UTC+07:00) Jakarta',
    'Asia/Krasnoyarsk'               => '(UTC+07:00) Krasnoyarsk',
    'Asia/Novokuznetsk'              => '(UTC+07:00) Novokuznetsk',
    'Asia/Phnom_Penh'                => '(UTC+07:00) Phnom Penh',
    'Asia/Pontianak'                 => '(UTC+07:00) Pontianak',
    'Asia/Vientiane'                 => '(UTC+07:00) Vientiane',

    'Asia/Brunei'                    => '(UTC+08:00) Brunei',
    'Antarctica/Casey'               => '(UTC+08:00) Casey',
    'Asia/Chita'                     => '(UTC+08:00) Chita',
    'Asia/Choibalsan'                => '(UTC+08:00) Choibalsan',
    'Australia/Eucla'                => '(UTC+08:00) Eucla, Australia',
    'Asia/Harbin'                    => '(UTC+08:00) Harbin',
    'Asia/Hong_Kong'                 => '(UTC+08:00) Hong Kong',
    'Asia/Irkutsk'                   => '(UTC+08:00) Irkutsk',
    'Asia/Kuala_Lumpur'              => '(UTC+08:00) Kuala Lumpur',
    'Asia/Kuching'                   => '(UTC+08:00) Kuching',
    'Asia/Macau'                     => '(UTC+08:00) Macau',
    'Asia/Makassar'                  => '(UTC+08:00) Makassar',
    'Asia/Manila'                    => '(UTC+08:00) Manila',
    'Australia/Perth'                => '(UTC+08:00) Perth',
    'Asia/Pyongyang'                 => '(UTC+08:00) Pyongyang',
    'Asia/Shanghai'                  => '(UTC+08:00) Shanghai',
    'Asia/Singapore'                 => '(UTC+08:00) Singapore',
    'Asia/Taipei'                    => '(UTC+08:00) Taipei',
    'Asia/Ulaanbaatar'               => '(UTC+08:00) Ulaanbaatar',

    'Australia/Darwin'               => '(UTC+09:00) Darwin, Australia',
    'Asia/Dili'                      => '(UTC+09:00) Dili, East Timor',
    'Asia/Jayapura'                  => '(UTC+09:00) Jayapura',
    'Asia/Khandyga'                  => '(UTC+09:00) Khandyga',
    'Pacific/Palau'                  => '(UTC+09:00) Palau',
    'Asia/Seoul'                     => '(UTC+09:00) Seoul',
    'Asia/Tokyo'                     => '(UTC+09:00) Tokyo',
    'Asia/Yakutsk'                   => '(UTC+09:00) Yakutsk',

    'Australia/Adelaide'             => '(UTC+10:00) Adelaide',
    'Australia/Brisbane'             => '(UTC+10:00) Brisbane',
    'Australia/Broken_Hill'          => '(UTC+10:00) Broken Hill',
    'Pacific/Chuuk'                  => '(UTC+10:00) Chuuk',
    'Antarctica/DumontDUrville'      => '(UTC+10:00) Dumont d\'Urville',
    'Pacific/Guam'                   => '(UTC+10:00) Guam',
    'Australia/Lindeman'             => '(UTC+10:00) Lindeman Island, Northern Mariana Islands',
    'Asia/Magadan'                   => '(UTC+10:00) Magadan',
    'Pacific/Port_Moresby'           => '(UTC+10:00) Port Moresby',
    'Pacific/Saipan'                 => '(UTC+10:00) Saipan',
    'Asia/Sakhalin'                  => '(UTC+10:00) Sakhalin, Russia',
    'Asia/Ust-Nera'                  => '(UTC+10:00) Ust-Nera',
    'Asia/Vladivostok'               => '(UTC+10:00) Vladivostok',

    'Pacific/Bougainville'           => '(UTC+11:00) Bougainville',
    'Australia/Currie'               => '(UTC+11:00) Currie',
    'Pacific/Efate'                  => '(UTC+11:00) Efate',
    'Pacific/Guadalcanal'            => '(UTC+11:00) Guadalcanal',
    'Australia/Hobart'               => '(UTC+11:00) Hobart',
    'Pacific/Kosrae'                 => '(UTC+11:00) Kosrae',
    'Australia/Lord_Howe'            => '(UTC+11:00) Lord Howe',
    'Antarctica/Macquarie'           => '(UTC+11:00) Macquarie',
    'Australia/Melbourne'            => '(UTC+11:00) Melbourne',
    'Pacific/Norfolk'                => '(UTC+11:00) Norfolk',
    'Pacific/Noumea'                 => '(UTC+11:00) Noumea',
    'Pacific/Pohnpei'                => '(UTC+11:00) Pohnpei',
    'Asia/Srednekolymsk'             => '(UTC+11:00) Srednekolymsk',
    'Australia/Sydney'               => '(UTC+11:00) Sydney',

    'Asia/Anadyr'                    => '(UTC+12:00) Anadyr',
    'Pacific/Funafuti'               => '(UTC+12:00) Funafuti',
    'Asia/Kamchatka'                 => '(UTC+12:00) Kamchatka',
    'Pacific/Kwajalein'              => '(UTC+12:00) Kwajalein Atoll',
    'Pacific/Majuro'                 => '(UTC+12:00) Majuro',
    'Pacific/Nauru'                  => '(UTC+12:00) Nauru',
    'Pacific/Tarawa'                 => '(UTC+12:00) Tarawa Atoll, Kiribati',
    'Pacific/Wake'                   => '(UTC+12:00) Wake Island',
    'Pacific/Wallis'                 => '(UTC+12:00) Wallis Island',

    'Pacific/Auckland'               => '(UTC+13:00) Auckland, New Zealand',
    'Pacific/Chatham'                => '(UTC+13:00) Chatham',
    'Pacific/Enderbury'              => '(UTC+13:00) Enderbury',
    'Pacific/Fakaofo'                => '(UTC+13:00) Fakaofo',
    'Pacific/Fiji'                   => '(UTC+13:00) Fiji',
    'Antarctica/McMurdo'             => '(UTC+13:00) McMurdo',
    'Pacific/Tongatapu'              => '(UTC+13:00) Tongatapu',

    'Pacific/Apia'                   => '(UTC+14:00) Apia',
    'Pacific/Kiritimati'             => '(UTC+14:00) Kiritimati',
  );

  #===================================================================
}