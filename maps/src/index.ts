import { Company } from "./Company";
import { User } from "./User";
import { MapClass } from "./MapClass";

const user = new User();
const company = new Company();
const customMap = new MapClass("map");
customMap.addMarker(user);
customMap.addMarker(company);
