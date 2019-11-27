--
-- PostgreSQL database dump
--

-- Dumped from database version 11.6 (Ubuntu 11.6-1.pgdg16.04+1)
-- Dumped by pg_dump version 11.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: cities; Type: TABLE; Schema: public; Owner: dumzfnczlxyogr
--

CREATE TABLE "public"."cities" (
    "id" integer NOT NULL,
    "name" character varying(50) NOT NULL
);


ALTER TABLE public.cities OWNER TO dumzfnczlxyogr;

--
-- Name: cities_id_seq; Type: SEQUENCE; Schema: public; Owner: dumzfnczlxyogr
--

CREATE SEQUENCE "public"."cities_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cities_id_seq OWNER TO dumzfnczlxyogr;

--
-- Name: cities_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dumzfnczlxyogr
--

ALTER SEQUENCE "public"."cities_id_seq" OWNED BY "public"."cities"."id";


--
-- Name: favorites; Type: TABLE; Schema: public; Owner: dumzfnczlxyogr
--

CREATE TABLE "public"."favorites" (
    "id" integer NOT NULL,
    "user_id" integer,
    "property_id" integer,
    "status" boolean DEFAULT false
);


ALTER TABLE public.favorites OWNER TO dumzfnczlxyogr;

--
-- Name: favorites_id_seq; Type: SEQUENCE; Schema: public; Owner: dumzfnczlxyogr
--

CREATE SEQUENCE "public"."favorites_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.favorites_id_seq OWNER TO dumzfnczlxyogr;

--
-- Name: favorites_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dumzfnczlxyogr
--

ALTER SEQUENCE "public"."favorites_id_seq" OWNED BY "public"."favorites"."id";


--
-- Name: login; Type: TABLE; Schema: public; Owner: dumzfnczlxyogr
--

CREATE TABLE "public"."login" (
    "username" character varying(50),
    "hash" character varying(300) NOT NULL
);


ALTER TABLE public.login OWNER TO dumzfnczlxyogr;

--
-- Name: neighborhood; Type: TABLE; Schema: public; Owner: dumzfnczlxyogr
--

CREATE TABLE "public"."neighborhood" (
    "id" integer NOT NULL,
    "name" character varying(50) NOT NULL,
    "city_id" integer
);


ALTER TABLE public.neighborhood OWNER TO dumzfnczlxyogr;

--
-- Name: neighborhood_id_seq; Type: SEQUENCE; Schema: public; Owner: dumzfnczlxyogr
--

CREATE SEQUENCE "public"."neighborhood_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.neighborhood_id_seq OWNER TO dumzfnczlxyogr;

--
-- Name: neighborhood_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dumzfnczlxyogr
--

ALTER SEQUENCE "public"."neighborhood_id_seq" OWNED BY "public"."neighborhood"."id";


--
-- Name: property; Type: TABLE; Schema: public; Owner: dumzfnczlxyogr
--

CREATE TABLE "public"."property" (
    "id" integer NOT NULL,
    "neighborhood_id" integer NOT NULL,
    "position" character varying(150),
    "price" numeric NOT NULL,
    "area" integer,
    "building_area" integer,
    "purpose_id" integer NOT NULL,
    "type_id" integer NOT NULL,
    "building_loan" boolean DEFAULT false,
    "exchange" boolean DEFAULT false NOT NULL,
    "isvisible" boolean DEFAULT true NOT NULL,
    "creator_id" integer NOT NULL
);


ALTER TABLE public.property OWNER TO dumzfnczlxyogr;

--
-- Name: property_details; Type: TABLE; Schema: public; Owner: dumzfnczlxyogr
--

CREATE TABLE "public"."property_details" (
    "property_id" integer NOT NULL,
    "room" integer,
    "dormitory" integer,
    "garage" integer,
    "bathroom" integer,
    "living_room" integer,
    "dining_room" integer,
    "suite" integer,
    "laundry" integer,
    "washbasin" integer,
    "kitchen" integer,
    "gourmet_space" integer,
    "office" integer
);


ALTER TABLE public.property_details OWNER TO dumzfnczlxyogr;

--
-- Name: property_features; Type: TABLE; Schema: public; Owner: dumzfnczlxyogr
--

CREATE TABLE "public"."property_features" (
    "property_id" integer NOT NULL,
    "description" "text",
    "air_conditioning" boolean,
    "pool" boolean,
    "balcony" boolean,
    "barbecue_grill" boolean,
    "stairway" boolean,
    "garden" boolean,
    "fire_security" boolean,
    "camera_security" boolean
);


ALTER TABLE public.property_features OWNER TO dumzfnczlxyogr;

--
-- Name: property_id_seq; Type: SEQUENCE; Schema: public; Owner: dumzfnczlxyogr
--

CREATE SEQUENCE "public"."property_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.property_id_seq OWNER TO dumzfnczlxyogr;

--
-- Name: property_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dumzfnczlxyogr
--

ALTER SEQUENCE "public"."property_id_seq" OWNED BY "public"."property"."id";


--
-- Name: property_photos; Type: TABLE; Schema: public; Owner: dumzfnczlxyogr
--

CREATE TABLE "public"."property_photos" (
    "id" integer NOT NULL,
    "property_id" integer,
    "url" character varying(500),
    "alt" character varying(50),
    "iscover" boolean,
    "cdn" character varying(500)
);


ALTER TABLE public.property_photos OWNER TO dumzfnczlxyogr;

--
-- Name: property_photos_id_seq; Type: SEQUENCE; Schema: public; Owner: dumzfnczlxyogr
--

CREATE SEQUENCE "public"."property_photos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.property_photos_id_seq OWNER TO dumzfnczlxyogr;

--
-- Name: property_photos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dumzfnczlxyogr
--

ALTER SEQUENCE "public"."property_photos_id_seq" OWNED BY "public"."property_photos"."id";


--
-- Name: property_purpose; Type: TABLE; Schema: public; Owner: dumzfnczlxyogr
--

CREATE TABLE "public"."property_purpose" (
    "id" integer NOT NULL,
    "type" character varying(30) NOT NULL
);


ALTER TABLE public.property_purpose OWNER TO dumzfnczlxyogr;

--
-- Name: property_purpose_id_seq; Type: SEQUENCE; Schema: public; Owner: dumzfnczlxyogr
--

CREATE SEQUENCE "public"."property_purpose_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.property_purpose_id_seq OWNER TO dumzfnczlxyogr;

--
-- Name: property_purpose_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dumzfnczlxyogr
--

ALTER SEQUENCE "public"."property_purpose_id_seq" OWNED BY "public"."property_purpose"."id";


--
-- Name: property_type; Type: TABLE; Schema: public; Owner: dumzfnczlxyogr
--

CREATE TABLE "public"."property_type" (
    "id" integer NOT NULL,
    "type" character varying(30) NOT NULL
);


ALTER TABLE public.property_type OWNER TO dumzfnczlxyogr;

--
-- Name: property_type_id_seq; Type: SEQUENCE; Schema: public; Owner: dumzfnczlxyogr
--

CREATE SEQUENCE "public"."property_type_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.property_type_id_seq OWNER TO dumzfnczlxyogr;

--
-- Name: property_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dumzfnczlxyogr
--

ALTER SEQUENCE "public"."property_type_id_seq" OWNED BY "public"."property_type"."id";


--
-- Name: user; Type: TABLE; Schema: public; Owner: dumzfnczlxyogr
--

CREATE TABLE "public"."user" (
    "id" integer NOT NULL,
    "username" character varying(50) NOT NULL,
    "email" character varying(100) NOT NULL,
    "phone" character varying(100),
    "type_id" integer DEFAULT 3,
    "contact_type" integer DEFAULT 1
);


ALTER TABLE public."user" OWNER TO dumzfnczlxyogr;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: dumzfnczlxyogr
--

CREATE SEQUENCE "public"."user_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO dumzfnczlxyogr;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dumzfnczlxyogr
--

ALTER SEQUENCE "public"."user_id_seq" OWNED BY "public"."user"."id";


--
-- Name: user_type; Type: TABLE; Schema: public; Owner: dumzfnczlxyogr
--

CREATE TABLE "public"."user_type" (
    "id" integer NOT NULL,
    "type" character varying(20) NOT NULL
);


ALTER TABLE public.user_type OWNER TO dumzfnczlxyogr;

--
-- Name: user_type_id_seq; Type: SEQUENCE; Schema: public; Owner: dumzfnczlxyogr
--

CREATE SEQUENCE "public"."user_type_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_type_id_seq OWNER TO dumzfnczlxyogr;

--
-- Name: user_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dumzfnczlxyogr
--

ALTER SEQUENCE "public"."user_type_id_seq" OWNED BY "public"."user_type"."id";


--
-- Name: visit_schedule; Type: TABLE; Schema: public; Owner: dumzfnczlxyogr
--

CREATE TABLE "public"."visit_schedule" (
    "id" integer NOT NULL,
    "property_id" integer,
    "time_register" character varying(50),
    "date_register" character varying(100),
    "user_id" integer NOT NULL,
    "status" boolean,
    "consultor_id" integer
);


ALTER TABLE public.visit_schedule OWNER TO dumzfnczlxyogr;

--
-- Name: visit_schedule_id_seq; Type: SEQUENCE; Schema: public; Owner: dumzfnczlxyogr
--

CREATE SEQUENCE "public"."visit_schedule_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.visit_schedule_id_seq OWNER TO dumzfnczlxyogr;

--
-- Name: visit_schedule_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dumzfnczlxyogr
--

ALTER SEQUENCE "public"."visit_schedule_id_seq" OWNED BY "public"."visit_schedule"."id";


--
-- Name: cities id; Type: DEFAULT; Schema: public; Owner: dumzfnczlxyogr
--

ALTER TABLE ONLY "public"."cities" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."cities_id_seq"'::"regclass");


--
-- Name: favorites id; Type: DEFAULT; Schema: public; Owner: dumzfnczlxyogr
--

ALTER TABLE ONLY "public"."favorites" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."favorites_id_seq"'::"regclass");


--
-- Name: neighborhood id; Type: DEFAULT; Schema: public; Owner: dumzfnczlxyogr
--

ALTER TABLE ONLY "public"."neighborhood" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."neighborhood_id_seq"'::"regclass");


--
-- Name: property id; Type: DEFAULT; Schema: public; Owner: dumzfnczlxyogr
--

ALTER TABLE ONLY "public"."property" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."property_id_seq"'::"regclass");


--
-- Name: property_photos id; Type: DEFAULT; Schema: public; Owner: dumzfnczlxyogr
--

ALTER TABLE ONLY "public"."property_photos" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."property_photos_id_seq"'::"regclass");


--
-- Name: property_purpose id; Type: DEFAULT; Schema: public; Owner: dumzfnczlxyogr
--

ALTER TABLE ONLY "public"."property_purpose" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."property_purpose_id_seq"'::"regclass");


--
-- Name: property_type id; Type: DEFAULT; Schema: public; Owner: dumzfnczlxyogr
--

ALTER TABLE ONLY "public"."property_type" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."property_type_id_seq"'::"regclass");


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: dumzfnczlxyogr
--

ALTER TABLE ONLY "public"."user" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."user_id_seq"'::"regclass");


--
-- Name: user_type id; Type: DEFAULT; Schema: public; Owner: dumzfnczlxyogr
--

ALTER TABLE ONLY "public"."user_type" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."user_type_id_seq"'::"regclass");


--
-- Name: visit_schedule id; Type: DEFAULT; Schema: public; Owner: dumzfnczlxyogr
--

ALTER TABLE ONLY "public"."visit_schedule" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."visit_schedule_id_seq"'::"regclass");


--
-- Data for Name: cities; Type: TABLE DATA; Schema: public; Owner: dumzfnczlxyogr
--

COPY "public"."cities" ("id", "name") FROM stdin;
1	Piracicaba
\.


--
-- Data for Name: favorites; Type: TABLE DATA; Schema: public; Owner: dumzfnczlxyogr
--

COPY "public"."favorites" ("id", "user_id", "property_id", "status") FROM stdin;
1	4	1	t
\.


--
-- Data for Name: login; Type: TABLE DATA; Schema: public; Owner: dumzfnczlxyogr
--

COPY "public"."login" ("username", "hash") FROM stdin;
admin	$2b$10$Nvo0McFMY0zou85gFha1fetIEwXyX0n6VZbPFy5cZPp.8ZKt5pRPG
consultor1	$2b$10$.PnS7J7ddt1kkdrBkMyA9u.smvgM/L/pvIF5NOcoy/0abb.tJAKi.
consultor2	$2b$10$gAozW3QLz/p2VHHg04l5HOP9ZO6HzdRgGcO4u4pschZYWqQZZBdf6
pedro.pinese	$2b$10$v3DRfdrEBA6no/hgCF3OZe5So8i1xOZ4lDa.RUP6pNQ28uulVWblW
Teste	$2b$10$U0D4tjAnyk/4nTFY.4IzE.SgyfM5deD7fEUNopWDUxOLzxcK3FFm6
Laís	$2b$10$0DMAU43ZPo8aMj94MDDgveqpY9HEbmgGTZDOmgy0PIRPICalPafb.
\.


--
-- Data for Name: neighborhood; Type: TABLE DATA; Schema: public; Owner: dumzfnczlxyogr
--

COPY "public"."neighborhood" ("id", "name", "city_id") FROM stdin;
1	Santa Rosa	1
2	Vila Rezende	1
3	Nova Piracicaba	1
4	Jardim Monumento	1
5	Jardim Elite	1
6	Centro	1
7	Bairro Alto	1
8	Morumbi	1
9	Jaraguá	1
10	Jupiá	1
\.


--
-- Data for Name: property; Type: TABLE DATA; Schema: public; Owner: dumzfnczlxyogr
--

COPY "public"."property" ("id", "neighborhood_id", "position", "price", "area", "building_area", "purpose_id", "type_id", "building_loan", "exchange", "isvisible", "creator_id") FROM stdin;
1	1	{}	1400	150	100	1	1	t	f	t	1
2	4	{"lat":"-22.714018","long":"-47.661293"}	430000	230	190	2	1	t	f	t	1
3	6	{"lat":"-22.724976","long":"47.647600"}	600000	120	120	2	2	f	t	t	1
4	9	{"lat":"-22.711758","long":"-47.666575"}	90000	150	0	2	6	f	f	t	1
5	10	{}	400000	500	210	2	5	t	f	t	1
6	7	{}	1500	70	70	1	2	f	f	t	1
7	2	{}	1900	210	130	1	1	f	f	t	1
8	6	{"lat":"-22.724980","long":"-47.647600"}	300000	38	38	2	4	t	t	t	1
9	5	{"lat":"-22.732230","long":"-47.636640"}	2300000	67	67	1	2	t	f	t	1
10	1	{"lat":"-22.688215","long":"-47.630459"}	4100000	300	200	2	5	f	f	t	1
11	3	{"lat":"-22.717680","long":"-47.660610"}	900000	340	273	2	1	f	f	t	1
12	7	{}	1750	0	0	1	1	f	f	t	1
13	4	{"lat":"-22.708890","long":"-47.671080"}	850	47	47	1	2	f	f	t	1
14	5	{"lat":"-22.729704","long":"-47.632080"}	8000000	500	0	2	6	t	f	t	1
15	8	{"lat":"-22.739836","long":"-47.619383"}	4000	700	500	2	3	f	f	t	1
16	10	{"lat":"-22.712603","long":"-47.684585"}	500000	600	400	2	5	f	t	t	1
17	9	{"lat":"-22.750918","long":"-47.672574"}	150000	120	110	1	1	f	t	t	1
18	8	{"lat":"-22.736852","long":"-47.626286"}	2300	200	100	1	3	f	f	t	1
19	7	{"lat":"-22.725452","long":"-47.645847"}	700	40	35	1	4	f	f	t	1
20	6	{}	4500	180	180	1	3	f	f	t	1
21	5	{}	600	0	0	1	4	f	f	t	2
22	6	{}	210000	38	38	2	4	t	t	t	2
23	1	{}	350000	200	100	2	1	t	f	t	2
24	4	{}	200000	130	100	1	5	t	f	t	2
25	5	{}	500000	110	110	2	2	t	t	t	2
\.


--
-- Data for Name: property_details; Type: TABLE DATA; Schema: public; Owner: dumzfnczlxyogr
--

COPY "public"."property_details" ("property_id", "room", "dormitory", "garage", "bathroom", "living_room", "dining_room", "suite", "laundry", "washbasin", "kitchen", "gourmet_space", "office") FROM stdin;
1	\N	2	1	2	0	1	0	1	0	1	0	0
2	\N	3	2	2	0	1	1	1	0	1	0	0
3	\N	3	2	1	1	1	3	0	0	1	0	0
4	\N	0	0	0	0	0	0	0	0	0	0	0
5	\N	4	6	2	1	0	1	1	0	1	1	0
6	\N	2	1	1	0	1	0	0	1	1	0	1
7	\N	2	1	2	1	1	1	1	0	1	1	0
8	\N	1	0	1	1	0	0	1	0	1	0	0
9	\N	2	0	1	1	0	1	0	0	1	0	0
10	\N	4	4	2	1	1	1	0	1	1	1	0
11	\N	4	3	4	1	1	4	1	1	1	1	1
12	\N	2	1	1	1	0	0	0	0	1	0	0
13	\N	2	0	1	1	0	0	0	0	1	0	0
14	\N	0	0	0	0	0	0	0	0	0	0	0
15	\N	0	6	2	0	0	0	0	1	1	0	1
16	\N	4	9	4	1	1	2	1	0	1	0	0
17	\N	2	1	1	1	0	0	0	0	1	0	0
18	\N	0	0	2	0	0	0	0	0	0	0	0
19	\N	1	0	1	1	0	0	1	0	0	0	0
20	\N	0	0	2	0	0	0	0	0	0	0	1
21	\N	1	1	1	0	1	0	0	1	0	0	0
22	\N	1	1	0	1	0	0	0	0	1	0	0
23	\N	3	2	1	1	1	1	1	1	1	0	0
24	\N	2	1	0	1	1	0	1	0	1	1	0
25	\N	3	1	2	1	1	2	0	1	1	0	0
\.


--
-- Data for Name: property_features; Type: TABLE DATA; Schema: public; Owner: dumzfnczlxyogr
--

COPY "public"."property_features" ("property_id", "description", "air_conditioning", "pool", "balcony", "barbecue_grill", "stairway", "garden", "fire_security", "camera_security") FROM stdin;
1		t	f	f	f	f	f	f	f
2		f	f	f	f	t	t	f	f
3		t	f	t	f	f	f	f	f
4		f	f	f	f	f	f	f	f
5		f	t	f	t	f	t	f	f
6		t	f	f	f	f	f	t	f
7		f	f	f	t	f	t	f	f
8		t	f	t	f	f	f	f	t
9		f	f	t	f	f	f	f	t
10		f	f	f	t	f	t	t	f
11		t	t	t	t	t	t	t	t
12	Casa em localização privilegiada, com vizinhança segura e diversas opcões de entretenimento nos arredores	f	f	f	f	f	f	f	f
13	Apartamento aconhegante em ótimo estado	t	f	f	f	f	f	f	f
14	Terreno plano 	f	f	f	f	f	f	f	f
15		t	f	f	f	f	f	t	t
16		f	t	f	t	f	t	f	f
17		f	f	f	f	f	t	f	f
18		f	f	f	f	t	f	f	f
19		t	f	t	f	f	f	t	t
20		f	f	f	f	f	f	f	t
21		t	f	f	f	f	f	f	f
22		t	t	t	t	t	t	t	t
23		f	f	f	t	f	f	f	t
24		t	t	f	t	f	f	f	f
25		t	f	f	f	f	f	f	t
\.


--
-- Data for Name: property_photos; Type: TABLE DATA; Schema: public; Owner: dumzfnczlxyogr
--

COPY "public"."property_photos" ("id", "property_id", "url", "alt", "iscover", "cdn") FROM stdin;
1	1	https://portalvilabucket.s3.sa-east-1.amazonaws.com/spring-2955582_1920?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=jpg&Expires=1574655311&Signature=y9Nx%2FVLUGFAI0uWebseq7k2xQ5g%3D&x-amz-acl=public-read	\N	t	https://ik.imagekit.io/2agnc6wu5cbty/spring-2955582_1920
2	2	https://portalvilabucket.s3.sa-east-1.amazonaws.com/1?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574696639&Signature=YsSy0MHicVtonmzBDkthEjiKDc0%3D&x-amz-acl=public-read	\N	t	https://ik.imagekit.io/2agnc6wu5cbty/1
3	2	https://portalvilabucket.s3.sa-east-1.amazonaws.com/2?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574696647&Signature=AqcXc75QKfyJAjdSnE9tNMopSOA%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/2
4	2	https://portalvilabucket.s3.sa-east-1.amazonaws.com/3?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574696652&Signature=mChGkrKd%2F5emIQac21U3XVM2Wag%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/3
5	2	https://portalvilabucket.s3.sa-east-1.amazonaws.com/4?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574696656&Signature=j2OjFMzoaGIKu9PfqjmHmbMJKgE%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/4
6	2	https://portalvilabucket.s3.sa-east-1.amazonaws.com/5?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574696662&Signature=wriORSrSZl0%2FAxVSVnTubYzAs%2BI%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/5
7	3	https://portalvilabucket.s3.sa-east-1.amazonaws.com/ap1-1?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574696866&Signature=QmHOQeVXDshe1z6WfAKOXM%2F3A0Y%3D&x-amz-acl=public-read	\N	t	https://ik.imagekit.io/2agnc6wu5cbty/ap1-1
8	3	https://portalvilabucket.s3.sa-east-1.amazonaws.com/2?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574696874&Signature=BZ9ji3o%2BwLwo4wwGyDBQj0SjEaE%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/2
9	3	https://portalvilabucket.s3.sa-east-1.amazonaws.com/ap1-3?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574696911&Signature=5U0YIuSDw4aigEtDPdE4jyTXlD8%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/ap1-3
10	3	https://portalvilabucket.s3.sa-east-1.amazonaws.com/ap1-4?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574696917&Signature=97Q1UzeLaxr2Sw93jue1lAuAEwo%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/ap1-4
11	4	https://portalvilabucket.s3.sa-east-1.amazonaws.com/1%20175m?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=jpg&Expires=1574697211&Signature=7pUtyoPSrqiBTaq%2FTBhBqQ47NrI%3D&x-amz-acl=public-read	\N	t	https://ik.imagekit.io/2agnc6wu5cbty/1 175m
12	4	https://portalvilabucket.s3.sa-east-1.amazonaws.com/2%20175m?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=jpg&Expires=1574697218&Signature=gpigFRQOU%2BTh9pfjfX4UKYoMPaQ%3D&x-amz-acl=public-read	\N	\N	https://ik.imagekit.io/2agnc6wu5cbty/2 175m
13	5	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Ch1-1?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574697357&Signature=HMiMvHZPu45cNtHl0ggHlYjMMgA%3D&x-amz-acl=public-read	\N	t	https://ik.imagekit.io/2agnc6wu5cbty/Ch1-1
14	5	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Ch1-2?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574697374&Signature=11rR%2B4pcbess%2BSGGkF2o6cTJ8oo%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Ch1-2
15	5	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Ch3-3?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574697387&Signature=ai%2F3YMZfI50dY%2BcNotniT0%2FJt3w%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Ch3-3
16	6	https://portalvilabucket.s3.sa-east-1.amazonaws.com/ap2-1?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574697537&Signature=yRSw2J3F%2BStrRaRyXOoApmczDIk%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/ap2-1
17	6	https://portalvilabucket.s3.sa-east-1.amazonaws.com/ap2-2?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574697549&Signature=DZx%2ByyHg%2F4doydqU7id48u3CT3U%3D&x-amz-acl=public-read	\N	t	https://ik.imagekit.io/2agnc6wu5cbty/ap2-2
18	6	https://portalvilabucket.s3.sa-east-1.amazonaws.com/ap2-3?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574697553&Signature=YYSN6b34J55K8ITI%2BwqBhiIfKeY%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/ap2-3
19	7	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Cs2-1?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574697684&Signature=%2BbfMNYhyfAC17dbMSCMxPZM%2B5ak%3D&x-amz-acl=public-read	\N	t	https://ik.imagekit.io/2agnc6wu5cbty/Cs2-1
20	7	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Cs2-2?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574697691&Signature=ir4YeDrRzDVUMza%2BtdPivM%2FA7T4%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Cs2-2
21	7	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Cs2-3?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574697695&Signature=EzFj8zCzp6Wjl7QwMqiDuYI4o%2BU%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Cs2-3
22	7	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Cs2-4?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574697699&Signature=MLXUwySPxcPBo%2Bgm3VWiHzjcC4A%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Cs2-4
23	7	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Cs2-5?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574697703&Signature=%2FQ9bbNEHjdQYCCKyb61k6nOQ7EM%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Cs2-5
24	8	https://portalvilabucket.s3.sa-east-1.amazonaws.com/kt1-1?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574697892&Signature=MKVUVrxmwpUl3JPEn4SU9lSAfGE%3D&x-amz-acl=public-read	\N	t	https://ik.imagekit.io/2agnc6wu5cbty/kt1-1
25	8	https://portalvilabucket.s3.sa-east-1.amazonaws.com/kt1-2?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574697897&Signature=SCpB0JPyxYrdBq8Fa6bdbvdrTLM%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/kt1-2
26	8	https://portalvilabucket.s3.sa-east-1.amazonaws.com/kt1-3?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574697901&Signature=O%2BYVRm5IZbtMnbt7Siaj8GPZzRU%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/kt1-3
27	9	https://portalvilabucket.s3.sa-east-1.amazonaws.com/ap3-1?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574698103&Signature=OOfZzhCNVfu%2BQT1z1T3K6I12j3o%3D&x-amz-acl=public-read	\N	t	https://ik.imagekit.io/2agnc6wu5cbty/ap3-1
28	9	https://portalvilabucket.s3.sa-east-1.amazonaws.com/ap3-2?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574698110&Signature=V5MNBUtcpRjPrIwQMNy%2Fx2J0PuM%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/ap3-2
29	9	https://portalvilabucket.s3.sa-east-1.amazonaws.com/ap3-3?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574698114&Signature=PTG1JSlBvNKwd9VZBRLu9hsFdL8%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/ap3-3
30	9	https://portalvilabucket.s3.sa-east-1.amazonaws.com/ap3-4?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574698120&Signature=7tY5X8FMFNjvLC0YJOEKJ1d8dyk%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/ap3-4
67	21	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Kt2-1?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=jpg&Expires=1574720614&Signature=GDj5mWjMgYweMGxdtgLI%2FM1PE2U%3D&x-amz-acl=public-read	\N	t	https://ik.imagekit.io/2agnc6wu5cbty/Kt2-1
69	22	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Kt5-1?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=jpg&Expires=1574720810&Signature=y9%2BJ1V2h3FO2fSkkynVI9EQ7vss%3D&x-amz-acl=public-read	\N	t	https://ik.imagekit.io/2agnc6wu5cbty/Kt5-1
71	22	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Kt5-3?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=jpg&Expires=1574720824&Signature=JjK%2BkHDf3tWyclGdpI31URVEsek%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Kt5-3
72	23	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Cs1-01?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574721688&Signature=gmuC4PGdQtXydcHsEPCbe9rMleo%3D&x-amz-acl=public-read	\N	t	https://ik.imagekit.io/2agnc6wu5cbty/Cs1-01
73	23	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Cs1-02?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574721696&Signature=kS9%2FPztHu1jTg4%2FLTiZUETeFh98%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Cs1-02
74	23	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Cs1-03?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574721702&Signature=fu1usyKgnF8dHtSoS%2FlP1okeTIU%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Cs1-03
75	23	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Cs1-04?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574721707&Signature=M%2BD7HbcmGOdr11s2aoYrqvryQnU%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Cs1-04
76	24	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Ch4-1?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574721820&Signature=YRRNAIBdm1sLpGlz5UNgmeCs1XI%3D&x-amz-acl=public-read	\N	t	https://ik.imagekit.io/2agnc6wu5cbty/Ch4-1
78	24	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Ch4-3?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574721828&Signature=Bhwb0i5gFgGEfTsHdkDEaSca1GU%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Ch4-3
79	24	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Ch4-4?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574721832&Signature=35GbUXZn7afavk4oelVztNTSyh0%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Ch4-4
80	25	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Ap4-1?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574722058&Signature=B25Pyh5T1g4QCg2%2BrnL7dvTuHE0%3D&x-amz-acl=public-read	\N	t	https://ik.imagekit.io/2agnc6wu5cbty/Ap4-1
82	25	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Ap4-3?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574722072&Signature=uaUsODmfKdmPcX5NmYJkHFmNHNo%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Ap4-3
31	9	https://portalvilabucket.s3.sa-east-1.amazonaws.com/ap3-5?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574698124&Signature=c%2BZXASVxKpm7fvnL9gJ2UhO93mk%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/ap3-5
32	10	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Ch2-1?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574698322&Signature=6MB2m4jIkD5j%2FtYkSbPQObWNvYE%3D&x-amz-acl=public-read	\N	t	https://ik.imagekit.io/2agnc6wu5cbty/Ch2-1
33	10	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Ch2-2?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574698329&Signature=knwQck3W6bGq%2FVQzjgtZCwlmmHM%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Ch2-2
34	10	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Ch2-3?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574698335&Signature=vBLLwUdMoY1%2FNsdQwwldJw19nNU%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Ch2-3
35	10	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Ch2-4?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574698341&Signature=jdM9Op64RNOi%2FTJQQKFMZHS0pzs%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Ch2-4
36	11	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Cs4-%201?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574712907&Signature=npoOtLDr%2BodRWiW4hp2mnUCM2Jg%3D&x-amz-acl=public-read	\N	t	https://ik.imagekit.io/2agnc6wu5cbty/Cs4- 1
37	11	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Cs4-2?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574712913&Signature=0cgs1L0rApzCZzCe0L2LArY9sEw%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Cs4-2
38	11	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Cs4-3?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574712917&Signature=6b24Zqm6H7817ppYIfzHwcI07GQ%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Cs4-3
39	11	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Cs4-4?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574712922&Signature=IgPRnlwPTBVHCbAK%2F7m2YZivsUU%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Cs4-4
40	11	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Cs4-6?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574712937&Signature=VBnWqLw1vMRvi6zXv3QpKGZzgXM%3D&x-amz-acl=public-read	\N	\N	https://ik.imagekit.io/2agnc6wu5cbty/Cs4-6
41	12	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Cs3-2?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574713089&Signature=YE%2FRWgJJB7Ba2COTnhtqdZgsoZE%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Cs3-2
42	12	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Cs3-1?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574713082&Signature=3tGQoT6i5rbjpTIsb%2BZSO3hfrC8%3D&x-amz-acl=public-read	\N	t	https://ik.imagekit.io/2agnc6wu5cbty/Cs3-1
43	12	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Cs3-3?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574713095&Signature=okN%2FwEF2ZKjughdrWY3rwa0TpQU%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Cs3-3
44	12	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Cs3-4?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574713101&Signature=YE%2F5KpHE1SeVIInnhjl1bkAOyvU%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Cs3-4
45	13	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Ap5-1?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574713343&Signature=spBBNn30Ccgn8jXbPkKo63nW8cM%3D&x-amz-acl=public-read	\N	t	https://ik.imagekit.io/2agnc6wu5cbty/Ap5-1
46	13	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Ap5-2?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574713348&Signature=B3MF3maBytGrPQSoly53jjKpCNA%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Ap5-2
47	13	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Ap5-3?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574713352&Signature=M1H2o9slD%2FMo4PZC%2FHICVR43kMI%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Ap5-3
48	14	https://portalvilabucket.s3.sa-east-1.amazonaws.com/1%202300m?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=jpg&Expires=1574713574&Signature=HHqOkH0YzfuVgrWcOaUl%2BGxB0R8%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/1 2300m
49	14	https://portalvilabucket.s3.sa-east-1.amazonaws.com/2%202300m?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=jpg&Expires=1574713578&Signature=earrndh6erd9ZJdgBdEakrIKHi8%3D&x-amz-acl=public-read	\N	t	https://ik.imagekit.io/2agnc6wu5cbty/2 2300m
50	15	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Br2-1?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=jpg&Expires=1574713753&Signature=EMedwxDMLI6JFFDYigmQOYOIXLs%3D&x-amz-acl=public-read	\N	t	https://ik.imagekit.io/2agnc6wu5cbty/Br2-1
51	15	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Br2-2?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=jpg&Expires=1574713759&Signature=9sicrUaDcQzDIdRQ9sheoRTKLUg%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Br2-2
52	15	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Br5-5?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=jpg&Expires=1574713768&Signature=8INdhF0vjjPo9ZNE8pdJTL4InIY%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Br5-5
53	16	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Ch3-1?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574713912&Signature=q4M%2BvwiccIdCJeXvysXaM94rp8c%3D&x-amz-acl=public-read	\N	t	https://ik.imagekit.io/2agnc6wu5cbty/Ch3-1
54	16	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Ch3-2?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574713917&Signature=oO%2BiKGG8qXR0E98O72WDQnjkFjs%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Ch3-2
55	17	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Cs5-1?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574714052&Signature=xL0NOYw9vCxSl8ERDE1z%2BPyd7I4%3D&x-amz-acl=public-read	\N	t	https://ik.imagekit.io/2agnc6wu5cbty/Cs5-1
56	17	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Cs5-2?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574714057&Signature=7OYdSw%2F7T9bT5UxG6MPbBYq0EIo%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Cs5-2
57	17	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Cs5-3?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574714062&Signature=uB7d5UCkvsaQW%2FHANscyNYPs4OQ%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Cs5-3
58	17	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Cs5-5?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574714070&Signature=ZbwjNZO5BIapzYKoNQVGVZVQMPI%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Cs5-5
59	17	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Cs5-4?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574714066&Signature=54d0doqaz8PHvSsAiK%2Bu4PI6AbI%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Cs5-4
60	18	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Br1-1?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=jpg&Expires=1574714175&Signature=kJ4LJ5uNlwyP7Uor0VitOKBYcE8%3D&x-amz-acl=public-read	\N	t	https://ik.imagekit.io/2agnc6wu5cbty/Br1-1
61	19	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Kt3-1?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=jpg&Expires=1574714334&Signature=RobAK7CzRh17%2BOAvhHFkZRxZbQs%3D&x-amz-acl=public-read	\N	t	https://ik.imagekit.io/2agnc6wu5cbty/Kt3-1
62	19	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Kt3-2?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=jpg&Expires=1574714343&Signature=YH%2FQZXoDebCPFZ1KY0RN3IRbrLo%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Kt3-2
63	19	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Kt3-3?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=jpg&Expires=1574714347&Signature=PSIa4nHu%2Fpoi2FW3AHXzqcOwthI%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Kt3-3
64	20	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Br3-1?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=jpg&Expires=1574714458&Signature=cgwthwp29I8a7xpjG3y4ojXeMMY%3D&x-amz-acl=public-read	\N	t	https://ik.imagekit.io/2agnc6wu5cbty/Br3-1
65	20	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Br3-2?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=jpg&Expires=1574714463&Signature=qYSgzWjEUqS80r7Om%2BuAs0YX7rk%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Br3-2
66	20	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Br3-3?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=jpg&Expires=1574714468&Signature=uVPM8PlbBXYylBZ8RVeBk%2FEYETw%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Br3-3
68	21	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Kt2-2?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=jpg&Expires=1574720625&Signature=GlMd1dci9ZeMbO2f%2FzpAeI31s4I%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Kt2-2
70	22	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Kt5-2?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=jpg&Expires=1574720818&Signature=ZC9PBTfVLN4tQHtrW5vjXaufBiI%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Kt5-2
77	24	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Ch4-2?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574721824&Signature=WaVWJphPY8F%2FFvvdpgcHR39Jl1c%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Ch4-2
81	25	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Ap4-2?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574722065&Signature=DciMzEJ%2FILyihHOqDthf%2FUPH0Hw%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Ap4-2
83	25	https://portalvilabucket.s3.sa-east-1.amazonaws.com/Ap4-4?AWSAccessKeyId=AKIA5D3PRUX7ESTDKQ3J&Content-Type=png&Expires=1574722077&Signature=fg%2F3C0J2WeNVYtro%2F10LKSxK20E%3D&x-amz-acl=public-read	\N	f	https://ik.imagekit.io/2agnc6wu5cbty/Ap4-4
\.


--
-- Data for Name: property_purpose; Type: TABLE DATA; Schema: public; Owner: dumzfnczlxyogr
--

COPY "public"."property_purpose" ("id", "type") FROM stdin;
1	Locação
2	Venda
\.


--
-- Data for Name: property_type; Type: TABLE DATA; Schema: public; Owner: dumzfnczlxyogr
--

COPY "public"."property_type" ("id", "type") FROM stdin;
1	Casa
2	Apartamento
3	Barracao
4	Kitnet
5	Chácara
6	Terreno
7	Sala Comercial
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: dumzfnczlxyogr
--

COPY "public"."user" ("id", "username", "email", "phone", "type_id", "contact_type") FROM stdin;
1	admin	admin@admin.com	19996211991	1	1
2	consultor1	consultor1@consultor1.com	1934131000	2	1
3	consultor2	consultor2@consultor.com	1919919919	2	1
4	pedro.pinese	pedro.pinese@gatec.com.br	(19)997486823	3	1
5	Teste	teste@teste.com	981215292	1	1
6	Laís	lais.msalvador@gmail.com	19981320147	1	1
\.


--
-- Data for Name: user_type; Type: TABLE DATA; Schema: public; Owner: dumzfnczlxyogr
--

COPY "public"."user_type" ("id", "type") FROM stdin;
1	admin
2	consultant
3	guest
\.


--
-- Data for Name: visit_schedule; Type: TABLE DATA; Schema: public; Owner: dumzfnczlxyogr
--

COPY "public"."visit_schedule" ("id", "property_id", "time_register", "date_register", "user_id", "status", "consultor_id") FROM stdin;
1	1	09:30	2019-11-26T14:13:28.003Z	4	\N	\N
2	1	09:30	2019-12-06T14:25:00.000Z	6	\N	\N
\.


--
-- Name: cities_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dumzfnczlxyogr
--

SELECT pg_catalog.setval('"public"."cities_id_seq"', 1, true);


--
-- Name: favorites_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dumzfnczlxyogr
--

SELECT pg_catalog.setval('"public"."favorites_id_seq"', 1, true);


--
-- Name: neighborhood_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dumzfnczlxyogr
--

SELECT pg_catalog.setval('"public"."neighborhood_id_seq"', 10, true);


--
-- Name: property_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dumzfnczlxyogr
--

SELECT pg_catalog.setval('"public"."property_id_seq"', 25, true);


--
-- Name: property_photos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dumzfnczlxyogr
--

SELECT pg_catalog.setval('"public"."property_photos_id_seq"', 83, true);


--
-- Name: property_purpose_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dumzfnczlxyogr
--

SELECT pg_catalog.setval('"public"."property_purpose_id_seq"', 2, true);


--
-- Name: property_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dumzfnczlxyogr
--

SELECT pg_catalog.setval('"public"."property_type_id_seq"', 7, true);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dumzfnczlxyogr
--

SELECT pg_catalog.setval('"public"."user_id_seq"', 6, true);


--
-- Name: user_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dumzfnczlxyogr
--

SELECT pg_catalog.setval('"public"."user_type_id_seq"', 3, true);


--
-- Name: visit_schedule_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dumzfnczlxyogr
--

SELECT pg_catalog.setval('"public"."visit_schedule_id_seq"', 2, true);


--
-- Name: cities cities_pkey; Type: CONSTRAINT; Schema: public; Owner: dumzfnczlxyogr
--

ALTER TABLE ONLY "public"."cities"
    ADD CONSTRAINT "cities_pkey" PRIMARY KEY ("id");


--
-- Name: favorites favorites_pkey; Type: CONSTRAINT; Schema: public; Owner: dumzfnczlxyogr
--

ALTER TABLE ONLY "public"."favorites"
    ADD CONSTRAINT "favorites_pkey" PRIMARY KEY ("id");


--
-- Name: neighborhood neighborhood_pkey; Type: CONSTRAINT; Schema: public; Owner: dumzfnczlxyogr
--

ALTER TABLE ONLY "public"."neighborhood"
    ADD CONSTRAINT "neighborhood_pkey" PRIMARY KEY ("id");


--
-- Name: property_details property_details_pkey; Type: CONSTRAINT; Schema: public; Owner: dumzfnczlxyogr
--

ALTER TABLE ONLY "public"."property_details"
    ADD CONSTRAINT "property_details_pkey" PRIMARY KEY ("property_id");


--
-- Name: property_features property_features_pkey; Type: CONSTRAINT; Schema: public; Owner: dumzfnczlxyogr
--

ALTER TABLE ONLY "public"."property_features"
    ADD CONSTRAINT "property_features_pkey" PRIMARY KEY ("property_id");


--
-- Name: property_photos property_photos_pkey; Type: CONSTRAINT; Schema: public; Owner: dumzfnczlxyogr
--

ALTER TABLE ONLY "public"."property_photos"
    ADD CONSTRAINT "property_photos_pkey" PRIMARY KEY ("id");


--
-- Name: property property_pkey; Type: CONSTRAINT; Schema: public; Owner: dumzfnczlxyogr
--

ALTER TABLE ONLY "public"."property"
    ADD CONSTRAINT "property_pkey" PRIMARY KEY ("id");


--
-- Name: property_purpose property_purpose_pkey; Type: CONSTRAINT; Schema: public; Owner: dumzfnczlxyogr
--

ALTER TABLE ONLY "public"."property_purpose"
    ADD CONSTRAINT "property_purpose_pkey" PRIMARY KEY ("id");


--
-- Name: property_type property_type_pkey; Type: CONSTRAINT; Schema: public; Owner: dumzfnczlxyogr
--

ALTER TABLE ONLY "public"."property_type"
    ADD CONSTRAINT "property_type_pkey" PRIMARY KEY ("id");


--
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: dumzfnczlxyogr
--

ALTER TABLE ONLY "public"."user"
    ADD CONSTRAINT "user_pkey" PRIMARY KEY ("id");


--
-- Name: user_type user_type_pkey; Type: CONSTRAINT; Schema: public; Owner: dumzfnczlxyogr
--

ALTER TABLE ONLY "public"."user_type"
    ADD CONSTRAINT "user_type_pkey" PRIMARY KEY ("id");


--
-- Name: user user_username_key; Type: CONSTRAINT; Schema: public; Owner: dumzfnczlxyogr
--

ALTER TABLE ONLY "public"."user"
    ADD CONSTRAINT "user_username_key" UNIQUE ("username");


--
-- Name: visit_schedule visit_schedule_pkey; Type: CONSTRAINT; Schema: public; Owner: dumzfnczlxyogr
--

ALTER TABLE ONLY "public"."visit_schedule"
    ADD CONSTRAINT "visit_schedule_pkey" PRIMARY KEY ("id");


--
-- Name: favorites favorites_property_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dumzfnczlxyogr
--

ALTER TABLE ONLY "public"."favorites"
    ADD CONSTRAINT "favorites_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "public"."property"("id");


--
-- Name: favorites favorites_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dumzfnczlxyogr
--

ALTER TABLE ONLY "public"."favorites"
    ADD CONSTRAINT "favorites_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id");


--
-- Name: neighborhood neighborhood_city_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dumzfnczlxyogr
--

ALTER TABLE ONLY "public"."neighborhood"
    ADD CONSTRAINT "neighborhood_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "public"."cities"("id");


--
-- Name: property property_creator_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dumzfnczlxyogr
--

ALTER TABLE ONLY "public"."property"
    ADD CONSTRAINT "property_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "public"."user"("id");


--
-- Name: property_details property_details_property_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dumzfnczlxyogr
--

ALTER TABLE ONLY "public"."property_details"
    ADD CONSTRAINT "property_details_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "public"."property"("id") ON DELETE CASCADE;


--
-- Name: property_features property_features_property_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dumzfnczlxyogr
--

ALTER TABLE ONLY "public"."property_features"
    ADD CONSTRAINT "property_features_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "public"."property"("id") ON DELETE CASCADE;


--
-- Name: property property_neighborhood_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dumzfnczlxyogr
--

ALTER TABLE ONLY "public"."property"
    ADD CONSTRAINT "property_neighborhood_id_fkey" FOREIGN KEY ("neighborhood_id") REFERENCES "public"."neighborhood"("id");


--
-- Name: property_photos property_photos_property_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dumzfnczlxyogr
--

ALTER TABLE ONLY "public"."property_photos"
    ADD CONSTRAINT "property_photos_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "public"."property"("id") ON DELETE CASCADE;


--
-- Name: property property_purpose_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dumzfnczlxyogr
--

ALTER TABLE ONLY "public"."property"
    ADD CONSTRAINT "property_purpose_id_fkey" FOREIGN KEY ("purpose_id") REFERENCES "public"."property_purpose"("id");


--
-- Name: property property_type_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dumzfnczlxyogr
--

ALTER TABLE ONLY "public"."property"
    ADD CONSTRAINT "property_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "public"."property_type"("id");


--
-- Name: user user_type_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dumzfnczlxyogr
--

ALTER TABLE ONLY "public"."user"
    ADD CONSTRAINT "user_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "public"."user_type"("id");


--
-- Name: visit_schedule visit_schedule_consultor_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dumzfnczlxyogr
--

ALTER TABLE ONLY "public"."visit_schedule"
    ADD CONSTRAINT "visit_schedule_consultor_id_fkey" FOREIGN KEY ("consultor_id") REFERENCES "public"."user"("id");


--
-- Name: visit_schedule visit_schedule_property_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dumzfnczlxyogr
--

ALTER TABLE ONLY "public"."visit_schedule"
    ADD CONSTRAINT "visit_schedule_property_id_fkey" FOREIGN KEY ("property_id") REFERENCES "public"."property"("id");


--
-- Name: visit_schedule visit_schedule_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: dumzfnczlxyogr
--

ALTER TABLE ONLY "public"."visit_schedule"
    ADD CONSTRAINT "visit_schedule_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id");


--
-- PostgreSQL database dump complete
--

