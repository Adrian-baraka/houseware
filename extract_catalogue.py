import os
import zipfile
import fitz  # PyMuPDF

# Detect user Downloads directory automatically (works on Windows, Mac, and Linux)
user_home = os.path.expanduser("~")
pdf_path = os.path.join(user_home, "Downloads", "CATALOGUE.pdf")

# Output folder inside your current 'houseware' project
output_folder = os.path.join(os.getcwd(), "public", "images", "catalogue")
zip_filename = "houseware_tanzania_catalogue_assets.zip"

os.makedirs(output_folder, exist_ok=True)

# Verify CATALOGUE.pdf exists in Downloads
if not os.path.exists(pdf_path):
    print(
        f"Error: Could not find 'CATALOGUE.pdf' in {os.path.join(user_home, 'Downloads')}"
    )
    print("Please make sure the file is in your Downloads folder and run again.")
    exit(1)

doc = fitz.open(pdf_path)

# Product mapping matching PDF pages & indices to SKU names
image_mapping = [
    # Page 4 - Hinges
    (4, 0, "H-011_2d_hinge_full_overlay.jpg"),
    (4, 1, "H-012_2d_hinge_half_overlay.jpg"),
    (4, 2, "H-013_2d_hinge_inset_overlay.jpg"),
    # Page 5 - Drawer Rails
    (5, 0, "D-011_drawer_rail_10in.jpg"),
    (5, 1, "D-012_drawer_rail_12in.jpg"),
    (5, 2, "D-013_drawer_rail_14in.jpg"),
    (5, 3, "D-014_drawer_rail_18in.jpg"),
    # Page 6 - Lift Up Systems
    (6, 0, "L-011_cabinet_stay_lift_up.jpg"),
    (6, 1, "L-012_shook_lift_up.jpg"),
    # Page 7 - PVC Skirting & Connectors
    (7, 0, "P-011_pvc_skirting_15cm.jpg"),
    (7, 1, "P-012_pvc_skirting_10cm.jpg"),
    (7, 2, "C-011_connector_10cm.jpg"),
    (7, 3, "C-012_connector_15cm.jpg"),
    # Page 8 - Angled Connectors
    (8, 0, "C-021_connector_90deg_10cm.jpg"),
    (8, 1, "C-022_connector_90deg_15cm.jpg"),
    (8, 2, "C-031_connector_180deg_10cm.jpg"),
    (8, 3, "C-032_connector_180deg_15cm.jpg"),
    # Page 10 - Organizers
    (10, 0, "KO-011_spice_rack.jpg"),
    (10, 1, "KO-012_cutlery_organizer.jpg"),
    (10, 2, "KO-013_corner_organizer.jpg"),
    (10, 3, "KO-014_builtin_dustbin.jpg"),
    (10, 4, "KO-015_pullout_organizer_60cm.jpg"),
    (10, 5, "KO-016_pullout_organizer_20cm.jpg"),
]

extracted_count = 0
for page_num, img_idx, filename in image_mapping:
    page = doc[page_num - 1]
    image_list = page.get_images()

    if img_idx < len(image_list):
        xref = image_list[img_idx][0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]

        filepath = os.path.join(output_folder, filename)
        with open(filepath, "wb") as f:
            f.write(image_bytes)
        extracted_count += 1

# Create zip file in project root
with zipfile.ZipFile(zip_filename, "w", zipfile.ZIP_DEFLATED) as zipf:
    for root, _, files in os.walk(output_folder):
        for file in files:
            zipf.write(
                os.path.join(root, file),
                os.path.relpath(os.path.join(root, file), output_folder),
            )

print(
    f"Done! {extracted_count} images saved to: {output_folder}"
)
print(f"Zip file created at: {os.path.join(os.getcwd(), zip_filename)}")