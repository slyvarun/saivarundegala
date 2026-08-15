import os
import shutil

os.makedirs('public/assest', exist_ok=True)
os.makedirs('public/assets', exist_ok=True)

# 1. Fix profile human photo: Untitled design (5).png -> profile_human.png
source_files = [f for f in os.listdir('public/assest') if 'untitled' in f.lower()]
if not source_files:
    source_files = [f for f in os.listdir('public/assets') if 'untitled' in f.lower()]

if source_files:
    target_src = os.path.join('public/assest', source_files[0])
    if not os.path.exists(target_src):
        target_src = os.path.join('public/assets', source_files[0])
    shutil.copyfile(target_src, 'public/assest/profile_human.png')
    shutil.copyfile(target_src, 'public/assets/profile_human.png')
    shutil.copyfile(target_src, 'public/profile_human.png')
    print("Created profile_human.png!")

# 2. Copy spiderman_profile.jpg
spidey_profile_src = 'public/spiderman_profile.jpg'
if os.path.exists(spidey_profile_src):
    shutil.copyfile(spidey_profile_src, 'public/assest/spiderman_profile.jpg')
    shutil.copyfile(spidey_profile_src, 'public/assets/spiderman_profile.jpg')

print("SUCCESS: Created profile_human.png and spiderman_profile.jpg!")
