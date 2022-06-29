import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ProfileCard, Card, SmallNumberCard, BankCard, LogCard} from '../components/dashboardCard'
import share from '../public/share.png'
import office from '../public/office.png'
import wrench from '../public/wrench.png'
import bank from '../public/bank.png'
import bank2 from '../public/bank2.png'
import warehouse from '../public/warehouse.png'

const logData = [
  {
    text: "Yusron baru saja menambahkan lokasi baru Kantor Cabang Jagakarsa",
    hari: "Hari ini",
    jam: "08:00",
  },
  {
    text: "Bintang baru saja menghapus sublokasi KCP Tebet 4 dari induk Kantor Cabang Tebet",
    hari: "Kemaren",
    jam: "17:32",
  },
  {
    text: "Yusron melakukan perubahan profil pada induk Kantor Cabang Bekasi",
    hari: "Kemaren",
    jam: "17:32",
  },
]

function Company_Dashboard_Mobile(){
  return (
    <div className="flex flex-row w-full">
      <Head>
        <title>Company Dashboard</title>
        <meta name="description" content="Company Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col flex-1 w-full h-full mx-6 mt-8">
        <div className='w-full'>
          <ProfileCard className={"w-full bg-white rounded-md drop-shadow flex flex-col"}></ProfileCard>
        </div>
        <div className='w-full'>
          <Card className={"bg-white w-full my-4"} title="Lokasi" button="Lihat semua" buttonClassName={"bg-white text-tertiary text-lg"}>
            <div className='grid grid-rows-3 gap-8 px-4'>
              <SmallNumberCard className={"h-full bg-tertiary rounded-lg drop-shadow"} icon={office} Number="20" justifyRight={true} title="Induk" textColor="text-white"></SmallNumberCard>
              <SmallNumberCard className={"h-full bg-[#50b058] rounded-lg drop-shadow"} icon={wrench} Number="3" justifyRight={true} title="Sub lokasi level 1" textColor="text-white"></SmallNumberCard>
              <SmallNumberCard className={"h-full bg-secondary rounded-lg drop-shadow"} icon={warehouse} Number="1" justifyRight={true} title="Sub lokasi level 2" textColor="text-white"></SmallNumberCard>
            </div>
          </Card>
          <Card className={"col-span-1 bg-white h-fit my-4"} title="Akun Bank" button="+ Tambah Akun Bank" buttonClassName={"hover:bg-green-700 bg-tertiary px-6 py-1 rounded-md text-white text-sm"}>
            <BankCard icon={bank} bankName="Bank KB Bukopin" cardNumber="**** 0876" cardName="Yusron Taufiq" currency="IDR" width={80} height={60} bankTextSize="text-md" textSize={"text-sm"}></BankCard>
            <BankCard icon={bank2} bankName="Citibank, NA" cardNumber="**** 5525" cardName="Si Tampan" currency="USD" width={80} height={60} bankTextSize="text-md" textSize={"text-sm"}></BankCard>
          </Card>
          <Card className={"col-span-1 bg-white h-fit my-4"} title="Relasi" button="Lihat semua" buttonClassName={"bg-white text-tertiary text-lg"}>
            <div className='flex flex-col'>
              <SmallNumberCard className={"h-full bg-white rounded-lg"} icon={share} Number="20" justifyRight={false} title="Memiliki" textColor="text-black"></SmallNumberCard>
              <SmallNumberCard className={"h-full bg-white rounded-lg"} icon={share} Number="108" justifyRight={false} title="Menggunakan" textColor="text-black"></SmallNumberCard>
              <SmallNumberCard className={"h-full bg-white rounded-lg"} icon={share} Number="67" justifyRight={false} title="Meminjam" textColor="text-black"></SmallNumberCard>
            </div>
          </Card>
          <Card className={"col-span-1 bg-white my-4"} title="Aktivitas">
            {logData.map((object) => (
              <LogCard key={object.text} className={"flex flex-col"} text={object.text} hari={object.hari} jam={object.jam}></LogCard>
            ))}
          </Card>
        </div>
      </main>
    </div>
  )
}

export default function Company_Dashboard() {
  

  return (
    <div className="flex flex-row ml-10 max-h-full overflow-hidden">
      <Head>
        <title>Company Dashboard</title>
        <meta name="description" content="Company Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-row flex-1 w-full h-full md:mt-20 md:ml-20 mt-8 gap-8 mr-8">
        <div className='w-1/5 h-full'>
          <ProfileCard className={"w-full bg-white h-full rounded-md drop-shadow flex flex-col pb-6"}></ProfileCard>
        </div>
        <div className='w-4/5 h-full grid grid-rows-5 gap-8 grid-flow-dense'>
          <Card className={"bg-white w-full row-span-1"} title="Lokasi" button="Lihat semua" buttonClassName={"bg-white text-tertiary text-lg"}>
            <div className='grid grid-cols-3 gap-8 px-4'>
              <SmallNumberCard className={"h-full bg-tertiary rounded-lg drop-shadow"} icon={office} Number="20" justifyRight={true} title="Induk" textColor="text-white"></SmallNumberCard>
              <SmallNumberCard className={"h-full bg-[#50b058] rounded-lg drop-shadow"} icon={wrench} Number="3" justifyRight={true} title="Sub lokasi level 1" textColor="text-white"></SmallNumberCard>
              <SmallNumberCard className={"h-full bg-secondary rounded-lg drop-shadow"} icon={warehouse} Number="1" justifyRight={true} title="Sub lokasi level 2" textColor="text-white"></SmallNumberCard>
            </div>
          </Card>
          <div className='w-full h-fit flex grid-cols-2 grid row-span-4 grid-flow-dense gap-6'>
            <div className='w-full h-fit grid-rows-2 grid grid-flow-dense row-auto gap-8'>
              <Card className={"col-span-1 bg-white h-fit "} title="Akun Bank" button="+ Tambah Akun Bank" buttonClassName={"hover:bg-green-700 bg-tertiary px-6 py-1 rounded-md text-white text-lg"}>
                <BankCard icon={bank} bankName="Bank KB Bukopin" cardNumber="**** 0876" cardName="Yusron Taufiq" currency="IDR" width={180} height={130} bankTextSize="text-2xl" textSize={"text-lg"}></BankCard>
                <BankCard icon={bank2} bankName="Citibank, NA" cardNumber="**** 5525" cardName="Si Tampan" currency="USD" width={180} height={130} bankTextSize="text-2xl" textSize={"text-lg"}></BankCard>
              </Card>
              <Card className={"col-span-1 bg-white h-fit "} title="Relasi" button="Lihat semua" buttonClassName={"bg-white text-tertiary text-lg"}>
                <div className='flex flex-col'>
                  <SmallNumberCard className={"h-full bg-white rounded-lg"} icon={share} Number="20" justifyRight={false} title="Memiliki" textColor="text-black"></SmallNumberCard>
                  <SmallNumberCard className={"h-full bg-white rounded-lg"} icon={share} Number="108" justifyRight={false} title="Menggunakan" textColor="text-black"></SmallNumberCard>
                  <SmallNumberCard className={"h-full bg-white rounded-lg"} icon={share} Number="67" justifyRight={false} title="Meminjam" textColor="text-black"></SmallNumberCard>
                </div>
              </Card>
            </div>
            <Card className={"col-span-1 bg-white"} title="Aktivitas">
              {logData.map((object) => (
                <LogCard key={object.text} className={"flex flex-col"} text={object.text} hari={object.hari} jam={object.jam}></LogCard>
              ))}
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

export {Company_Dashboard_Mobile}