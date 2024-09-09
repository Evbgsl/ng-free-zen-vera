import { data } from './data.js';
import { Header } from './widgets/Header/Header.js';
import { Download } from './widgets/Download/Download.js';
import { Warranty } from './widgets/Warranty/Warranty.js';
import { Care } from './widgets/Care/Care.js';
import { Cashback } from './widgets/Cashback/Cashback.js';
import { Clients } from './widgets/Сlients/Clients.js';
import { Footer } from './widgets/Footer/index.js';
import { handleLogoClick } from './handlers.js';

const $root = document.querySelector('#root');

$root?.insertAdjacentHTML('beforeend', Header(data.primaryInfo));
$root?.insertAdjacentHTML('beforeend', Download(data.download));
$root?.insertAdjacentHTML('beforeend', Warranty(data.warranty));
$root?.insertAdjacentHTML('beforeend', Care(data.care));
$root?.insertAdjacentHTML('beforeend', Cashback(data.cashback));
$root?.insertAdjacentHTML('beforeend', Clients(data.clients));
$root?.insertAdjacentHTML('beforeend', Footer(data.secondaryInfo));

const $logoBtn = document.querySelector('#logo');

$logoBtn?.addEventListener('click', handleLogoClick);
