import os
import math
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageEnhance

# Canvas Dimensions
W, H = 1760, 1240

# Load original base image for true notebook paper texture and page boundaries
base = Image.open('public/meng-to-sketchbook/marina-bay-sands.png').convert('RGBA')

# Create a clean warm paper canvas with the exact paper color mask
# Paper base color: #F4EEE2 (RGB: 244, 238, 226)
paper = Image.new('RGBA', (W, H), (0, 0, 0, 0))
draw_paper = ImageDraw.Draw(paper)

# Extract paper mask from base image (alpha channel > 0 and non-transparent background)
base_alpha = base.split()[3]

# Fill paper area with warm paper tone
for y in range(H):
    for x in range(W):
        a = base_alpha.getpixel((x, y))
        if a > 20:
            # Gutter shadow gradient in the middle (x: 840 to 920)
            dist_from_center = abs(x - W // 2)
            if dist_from_center < 60:
                shadow_factor = 0.78 + (dist_from_center / 60.0) * 0.22
                r = int(244 * shadow_factor)
                g = int(238 * shadow_factor)
                b = int(226 * shadow_factor)
            else:
                r, g, b = 244, 238, 226
            paper.putpixel((x, y), (r, g, b, a))

# Load fonts
# Use Noteworthy or Georgia / Avenir Next for crisp editorial typography
font_path_hw = '/System/Library/Fonts/Noteworthy.ttc'
font_path_serif = '/System/Library/Fonts/Supplemental/Georgia.ttf'
font_path_sans = '/System/Library/Fonts/HelveticaNeue.ttc'

if not os.path.exists(font_path_serif):
    font_path_serif = '/System/Library/Fonts/Georgia.ttf'

try:
    f_title = ImageFont.truetype(font_path_hw, 64, index=1)
    f_subtitle = ImageFont.truetype(font_path_serif, 24)
    f_handwriting = ImageFont.truetype(font_path_hw, 26, index=0)
    f_annotation = ImageFont.truetype(font_path_hw, 22, index=0)
    f_mono = ImageFont.truetype(font_path_hw, 20, index=0)
except Exception as e:
    print("Font loading fallback:", e)
    f_title = ImageFont.load_default()
    f_subtitle = ImageFont.load_default()
    f_handwriting = ImageFont.load_default()
    f_annotation = ImageFont.load_default()
    f_mono = ImageFont.load_default()

draw = ImageDraw.Draw(paper)

# Ink color: #2B2721 (Warm Dark Charcoal Ink)
INK = (43, 39, 33, 235)
INK_MUTED = (75, 68, 58, 200)
INK_FAINT = (120, 110, 95, 170)
INK_ACCENT = (165, 115, 75, 220)  # Warm Terracotta/Earth

# =========================================================================
# LEFT PAGE CONTENT (X: 140 to 760)
# =========================================================================

# 1. Main Heading
draw.text((160, 240), "Hi, I'm Aradhika.", font=f_title, fill=INK)

# Underline accent under heading
draw.line([(160, 320), (380, 320)], fill=INK_ACCENT, width=3)

# 2. Subtitle paragraph
paragraph_lines = [
    "I'm a UX designer who loves understanding people —",
    "how they think, feel, choose, hesitate, and behave."
]
y_p = 370
for line in paragraph_lines:
    draw.text((160, y_p), line, font=f_subtitle, fill=INK)
    y_p += 40

# 3. Handwritten Annotations & Doodles on Left Page

# Annotation 1: "observer" + Eye Icon
draw.text((160, 560), "observer", font=f_handwriting, fill=INK_ACCENT)
# Eye doodle
draw.arc([270, 560, 310, 585], 0, 360, fill=INK_ACCENT, width=2)
draw.ellipse([285, 568, 295, 577], fill=INK_ACCENT)

# Annotation 2: "always asking why?" + Curved Arrow
draw.text((450, 520), "always asking why?", font=f_annotation, fill=INK_MUTED)
# Draw subtle arrow pointing up-left toward paragraph
draw.arc([430, 470, 480, 530], 90, 230, fill=INK_MUTED, width=2)
draw.line([(430, 475), (425, 485)], fill=INK_MUTED, width=2)
draw.line([(430, 475), (438, 485)], fill=INK_MUTED, width=2)

# Annotation 3: "still learning :)"
draw.text((160, 880), "still learning :)", font=f_handwriting, fill=INK_FAINT)
draw.line([(160, 915), (280, 915)], fill=INK_FAINT, width=1)

# Subtle decorative vertical margin line
draw.line([(120, 180), (120, 1020)], fill=(215, 195, 175, 120), width=1)


# =========================================================================
# RIGHT PAGE CONTENT (X: 980 to 1620)
# =========================================================================

# 1. Right Page Main Statement
right_lines = [
    "I like working somewhere between",
    "psychology, behaviour & design."
]
y_r = 240
for line in right_lines:
    draw.text((1000, y_r), line, font=f_handwriting, fill=INK)
    y_r += 42

# Highlight flourish under "psychology, behaviour & design."
draw.arc([995, 325, 1420, 345], 0, 180, fill=INK_ACCENT, width=2)

# 2. Sketchbook Visual Doodles (Bird, Nature, Sunset, Observation, UX sketches)

# --- Doodle 1: Minimalist Bird on Branch ---
# Branch
draw.line([(1000, 440), (1160, 420)], fill=INK_MUTED, width=2)
draw.line([(1080, 430), (1120, 410)], fill=INK_MUTED, width=1)
# Bird body
draw.ellipse([1060, 400, 1100, 430], fill=None, outline=INK, width=2)
draw.ellipse([1085, 390, 1110, 412], fill=None, outline=INK, width=2)
draw.polygon([(1108, 400), (1118, 403), (1108, 406)], fill=INK) # Beak
draw.line([(1060, 415), (1035, 425)], fill=INK, width=2) # Tail

# Label next to bird
draw.text((1175, 415), "• nature & quiet moments", font=f_annotation, fill=INK_MUTED)

# --- Doodle 2: Sunset / Horizon Sketch ---
draw.line([(1000, 530), (1220, 530)], fill=INK_MUTED, width=2)
draw.arc([1070, 490, 1150, 570], 180, 360, fill=INK_ACCENT, width=2)
# Sun rays
for angle in [-45, -20, 0, 20, 45]:
    rad = math.radians(angle - 90)
    x1 = 1110 + int(45 * math.cos(rad))
    y1 = 530 + int(45 * math.sin(rad))
    x2 = 1110 + int(56 * math.cos(rad))
    y2 = 530 + int(56 * math.sin(rad))
    draw.line([(x1, y1), (x2, y2)], fill=INK_ACCENT, width=2)

draw.text((1235, 515), "• observation & clarity", font=f_annotation, fill=INK_MUTED)

# --- Doodle 3: Miniature UX / Mobile UI Wireframe Sketch ---
ui_x, ui_y = 1000, 600
# Phone frame
draw.rounded_rectangle([ui_x, ui_y, ui_x + 90, ui_y + 150], radius=10, outline=INK, width=2)
# UI header & search bar
draw.rectangle([ui_x + 10, ui_y + 15, ui_x + 80, ui_y + 30], outline=INK_MUTED, width=1)
# Content blocks
draw.rectangle([ui_x + 10, ui_y + 40, ui_x + 45, ui_y + 75], fill=(220, 210, 195, 250), outline=INK_MUTED)
draw.rectangle([ui_x + 50, ui_y + 40, ui_x + 80, ui_y + 75], fill=(220, 210, 195, 250), outline=INK_MUTED)
draw.line([(ui_x + 10, ui_y + 90), (ui_x + 75, ui_y + 90)], fill=INK_MUTED, width=2)
draw.line([(ui_x + 10, ui_y + 105), (ui_x + 60, ui_y + 105)], fill=INK_MUTED, width=2)
# Pill button
draw.rounded_rectangle([ui_x + 10, ui_y + 120, ui_x + 80, ui_y + 138], radius=6, fill=INK_ACCENT)

draw.text((1110, 660), "• human-centered interfaces", font=f_annotation, fill=INK_MUTED)

# 3. Handwritten Note Box at Bottom Right
draw.text((1000, 810), "I probably overthink things.", font=f_handwriting, fill=INK)
draw.text((1000, 848), "Sometimes that's useful.", font=f_handwriting, fill=INK_ACCENT)

# 4. Personal Illustration / Photo Placeholder Box
ph_x, ph_y, ph_w, ph_h = 1380, 720, 220, 240
# Dashed border
for px in range(ph_x, ph_x + ph_w, 12):
    draw.line([(px, ph_y), (min(px + 6, ph_x + ph_w), ph_y)], fill=INK_FAINT, width=2)
    draw.line([(px, ph_y + ph_h), (min(px + 6, ph_x + ph_w), ph_y + ph_h)], fill=INK_FAINT, width=2)
for py in range(ph_y, ph_y + ph_h, 12):
    draw.line([(ph_x, py), (ph_x, min(py + 6, ph_y + ph_h))], fill=INK_FAINT, width=2)
    draw.line([(ph_x + ph_w, py), (ph_x + ph_w, min(py + 6, ph_y + ph_h))], fill=INK_FAINT, width=2)

# Placeholder icon & text
draw.rectangle([ph_x + 80, ph_y + 60, ph_x + 140, ph_y + 110], outline=INK_FAINT, width=1)
draw.ellipse([ph_x + 95, ph_y + 70, ph_x + 125, ph_y + 100], outline=INK_FAINT, width=1)
draw.text((ph_x + 20, ph_y + 140), "[ Personal Illustration / ", font=f_mono, fill=INK_FAINT)
draw.text((ph_x + 45, ph_y + 168), "Photo Placeholder ]", font=f_mono, fill=INK_FAINT)


# Save output image
out_path = 'public/meng-to-sketchbook/page-1-aradhika.png'
paper.save(out_path, 'PNG')
print(f"Spread 0 generated successfully at {out_path}")
