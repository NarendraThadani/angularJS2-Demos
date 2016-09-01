import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let phones = [
		{ id: 11, name: 'Nexus4' },
		{ id: 12, name: 'Moto-X Play' },
		{ id: 13, name: 'Moto-G2' },
		{ id: 14, name: 'MotoX Style' },
		{ id: 15, name: 'Asus Zenfone' },
		{ id: 16, name: 'Nexus5' },
		{ id: 17, name: 'Samsung Galaxy S7' },
		{ id: 18, name: 'iPhone6S' },
		{ id: 19, name: 'NokiaLumia' },
		{ id: 20, name: 'LG Optimus' }
		];
    return {phones};
  }
}
