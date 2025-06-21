import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TabSection from '@/components/TabSection';
import Footer from '@/components/Footer';
import ProjectsSection from '@/components/ProjectsSection';
import BlogsSection from '@/components/BlogsSection';
import { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import Magnet from '@/components/ui/magnet';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const Index = () => {
  const [items, setItems] = useState({});
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
        const firebaseConfig = {
          apiKey: "AIzaSyAyKeECjE6k7i9w30OsIEDGy2YCQEF5vjk",
          authDomain: "furo-website.firebaseapp.com",
          projectId: "furo-website",
          storageBucket: "furo-website.firebasestorage.app",
          messagingSenderId: "286451193890",
          appId: "1:286451193890:web:51ae25a0eb02b43508d27b",
          measurementId: "G-NWY0SHRBJL"
        };
        
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app)
        
        const wait = new Promise(resolve => setTimeout(resolve, 2000)); // minimum 3 sec
        const fetch = getDocs(collection(db, 'furo'));

        const [querySnapshot] = await Promise.all([fetch, wait]);
        const fetchedItems = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setItems(fetchedItems[0]);
        console.log(fetchedItems[0])
        setLoading(false);
      };
    fetchData()
    }, []);

  if (loading) 
    return (
      <div className="min-h-screen min-w-screen flex justify-center items-center">
        <Magnet disabled={false} magnetStrength={5} padding={50}>
        <h1 
          className="lg:text-5xl xl:text-5xl font-[700] leading-[0.9] text-[#2c3e50] animate-fade"
          style={{ fontFamily: 'rubik' }}
        >
          loading ...
        </h1>
        </Magnet>
      </div>
    )

  return (
    <div className="min-h-screen w-full animate-fade-in">
      <Navbar />
      <HeroSection data={items['hero-section']} />
      <TabSection data={items['tab-section']} />
      <ProjectsSection data={items['featured-projects']['projects']} />
      <BlogsSection data={items['featured-blogs']['blogs']} />
      <Footer />
    </div>
  );
};

export default Index;