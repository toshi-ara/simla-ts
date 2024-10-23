INKSCAPE=inkscape

SRC = $(wildcard ./*.svg)
OBJ1 = $(SRC:%.svg=%.pdf)
OBJ2 = $(SRC:%.svg=%.png)

all: $(OBJ1) $(OBJ2)

clean:
	rm -f $(OBJ1) $(OBJ2)

%.pdf: %.svg
	$(INKSCAPE) -T $< -o $@

%.png: %.svg
	$(INKSCAPE) --export-type=png -d 150 $< -o $@

