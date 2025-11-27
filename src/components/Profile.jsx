import React from 'react';

const Profile = ({ profile }) => {
  return (
    <div className="cv-section profile">
      <img src={profile.photo_url} alt={profile.full_name} className="profile-img" />
      <h1>{profile.full_name}</h1>
      <p><strong>NIM:</strong> {profile.nim} | <strong>Prodi:</strong> {profile.prodi} ({profile.angkatan})</p>
      <h3>{profile.headline}</h3>
      <p>{profile.short_bio}</p>
      <p>Lokasi: {profile.location} | <a href={profile.portfolio_url} target="_blank" rel="noopener noreferrer">Kunjungi Portofolio</a></p>
    </div>
  );
};

export default Profile;