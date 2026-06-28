export interface Leader {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  category: 'patron' | 'chairman' | 'deputy' | 'secretary' | 'coordinator' | 'adviser' | 'spokesman';
}

export const leaders: Leader[] = [
  {
    id: 1,
    name: "Engr. (Dr.) Abisoye Coker-Odusote",
    role: "PATRON OF DAGFA",
    description: "One of Nigeria's most versatile technology and public sector leaders, with nearly two decades of experience spanning IT, Telecommunications, Finance, Oil & Gas, Healthcare, and Government services. Director General and CEO of the National Identity Management Commission (NIMC).",
    image: "/assets/patron-coker-odusote.jpg",
    category: "patron",
  },
  {
    id: 2,
    name: "Mr Niyi Coker",
    role: "NATIONAL CHAIRMAN",
    description: "Special Assistant to the NSA and the National Chairman of DAGFA. Provides strategic oversight and ensures alignment with national security and political objectives.",
    image: "/assets/leader-niyi-coker.jpg",
    category: "chairman",
  },
  {
    id: 3,
    name: "Mr Lanre Ladipo",
    role: "DEPUTY CHAIRMAN",
    description: "Special Assistant to the Senate President on New Media and Deputy Chairman of DAGFA. Drives digital strategy and new media engagement initiatives.",
    image: "/assets/leader-lanre-ladipo.jpg",
    category: "deputy",
  },
  {
    id: 4,
    name: "Ms Bolajoko Davies",
    role: "SECRETARY",
    description: "Entrepreneur and Secretary for DAGFA. Manages organizational operations, coordination, and internal communications across all units.",
    image: "/assets/leader-bolajoko-davies.jpg",
    category: "secretary",
  },
  {
    id: 5,
    name: "Mr Ibrahim Maidugu",
    role: "NORTHEAST COORDINATOR",
    description: "Real Estate Developer and Northeast Coordinator for DAGFA. Oversees grassroots engagement and regional strategy in the Northeast geopolitical zone.",
    image: "/assets/leader-ibrahim-maidugu.jpg",
    category: "coordinator",
  },
  {
    id: 6,
    name: "Ms Maryam Ahman",
    role: "NORTHWEST COORDINATOR",
    description: "Special Assistant to the President on Growth & Economic Expansion and Northwest Coordinator. Bridges policy insights with regional mobilization efforts.",
    image: "/assets/leader-maryam-ahman.jpg",
    category: "coordinator",
  },
  {
    id: 7,
    name: "Mr Olumide Agbeyo",
    role: "SOUTHWEST COORDINATOR",
    description: "Procurement Specialist and Southwest Coordinator for DAGFA. Manages resource allocation and regional operational strategy.",
    image: "/assets/leader-olumide-agbeyo.jpg",
    category: "coordinator",
  },
  {
    id: 8,
    name: "Mr Niyi Sodipo",
    role: "SPOKESMAN",
    description: "Consultant for APC E-registration Exercises and Spokesman for DAGFA. Manages public communications and media engagement strategies.",
    image: "/assets/leader-niyi-sodipo.jpg",
    category: "spokesman",
  },
  {
    id: 9,
    name: "Mrs Tunbosun Baruwa",
    role: "COORDINATOR",
    description: "Technical Adviser to DG NIMC and Coordinator for DAGFA. Provides technical expertise and institutional coordination.",
    image: "/assets/leader-tunbosun-baruwa.jpg",
    category: "coordinator",
  },
  {
    id: 10,
    name: "Mr Adetunji Nelson",
    role: "COORDINATOR",
    description: "Developmental Professional and Coordinator for DAGFA. Focuses on development-oriented initiatives and community impact programs.",
    image: "/assets/leader-adetunji-nelson.jpg",
    category: "coordinator",
  },
  {
    id: 11,
    name: "Mr Timi Elegba",
    role: "COORDINATOR",
    description: "CTO, Spectrometer Limited and Coordinator for DAGFA. Leads technology infrastructure and data systems development.",
    image: "/assets/leader-timi-elegba.jpg",
    category: "coordinator",
  },
  {
    id: 12,
    name: "Ambassador Ayodele Babalola",
    role: "COORDINATOR",
    description: "Technical Adviser to DG NIMC and Coordinator for DAGFA. Provides diplomatic and technical strategic counsel.",
    image: "/assets/leader-ayodele-babalola.jpg",
    category: "adviser",
  },
  {
    id: 13,
    name: "Mr Ayowale Ayodele",
    role: "COORDINATOR",
    description: "Program Coordinator, Nipost Agro-Infrastructure & Logistics Initiative and Coordinator for DAGFA. Drives agro-logistics and infrastructure-focused initiatives.",
    image: "/assets/leader-ayowale-ayodele.jpg",
    category: "coordinator",
  },
];
