import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "./firebase";
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";
import PreviewLinks from "./PreviewLinks";

export default function PublicPreview() {
  const { uid } = useParams();
  const [profile, setProfile] = useState(null);
  const [links, setLinks] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const fetchPublicProfile = async () => {
      try {
        const profileSnap = await getDoc(doc(db, "profiles", uid));
        const linksQuery = query(
          collection(db, "links"),
          where("userId", "==", uid)
        );
        const linksSnapshot = await getDocs(linksQuery);
        const fetchedLinks = [];
        linksSnapshot.forEach((linkDoc) => fetchedLinks.push(linkDoc.data()));
        fetchedLinks.sort((a, b) => a.timestamp - b.timestamp);

        setProfile(profileSnap.exists() ? profileSnap.data() : {});
        setLinks(fetchedLinks);
        setStatus("ready");
      } catch (error) {
        console.error("Error loading public profile: ", error);
        setStatus("error");
      }
    };

    fetchPublicProfile();
  }, [uid]);

  if (status === "loading") {
    return <div className="h-screen bg-lighter-gray"></div>;
  }

  if (status === "error") {
    return (
      <div className="h-screen bg-lighter-gray flex items-center justify-center">
        <p className="text-gray">This profile couldn&apos;t be loaded.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-lighter-gray font-instrument">
      <div className="grid gap-7 justify-center pt-16">
        {profile.photoURL ? (
          <img
            className="m-auto rounded-full w-28 h-28 object-cover border-4 border-dark-purple"
            src={profile.photoURL}
            alt="profile picture"
          />
        ) : (
          <div className="rounded-full h-28 w-28 bg-[#EEEEEE] m-auto"></div>
        )}
        <div className="grid gap-14">
          <div className="grid gap-3">
            <h1 className="text-center text-3xl font-bold text-dark-gray">{`${
              profile.firstName || ""
            } ${profile.lastName || ""}`}</h1>
            <h2 className="text-gray text-center">{profile.email}</h2>
          </div>
          <div className="grid gap-5 pb-16">
            {links.map((link) => (
              <PreviewLinks key={link.id} link={link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
